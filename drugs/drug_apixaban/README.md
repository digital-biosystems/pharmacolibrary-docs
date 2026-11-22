<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;apixaban&quot;}]"></div>

# apixaban

- **generic name:** apixaban
- **ATC codes:** `B01AF02`
- **DrugBank:** [DB06605](https://go.drugbank.com/drugs/DB06605) · **PubChem:** [CID 10182969](https://pubchem.ncbi.nlm.nih.gov/compound/10182969)
- **molar mass:** 459.4971 g/mol (C25H25N5O4) — DrugBank
- **groups:** approved, investigational

## About

Apixaban is a direct factor Xa inhibitor used to prevent and treat blood clots, such as those causing pulmonary embolism, and to prevent stroke in patients with atrial fibrillation. It is administered orally as a tablet. It is widely used and authorised in the European Union for conditions including venous thromboembolism and stroke.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q414462](https://www.wikidata.org/wiki/Q414462), [Wikipedia](https://en.wikipedia.org/wiki/Apixaban?oldid=1384988379) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| apixaban | parent | 459.497 | C25H25N5O4 | DrugBank | [10182969](https://pubchem.ncbi.nlm.nih.gov/compound/10182969) | Byon_2019, Kolowrat_2025 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q63 — no SI value to build from</sub> | [Byon_2019_reference](drugs/drug_apixaban/Apixaban_Byon2019_reference.md) | — | 2-compartment (no model) | 3 | Byon W et al., Apixaban: A Clinical Pharmacokinetic an…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00775-z](https://doi.org/10.1007/s40262-019-00775-z) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Kolowrat_2025_reference](drugs/drug_apixaban/Apixaban_Kolowrat2025_reference.md) | — | 1-compartment (no model) | 2 | Kolowrat S et al., Real-World Impact of Amiodarone on Apix…, Clinical and translational… (2025) | [10.1111/cts.70392](https://doi.org/10.1111/cts.70392) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Konecki_2025_reference](drugs/drug_apixaban/Apixaban_Konecki2025_reference.md) | — | 1-compartment (no model) | 0 | Konecki C et al., Population Pharmacokinetic Modelling of…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01476-6](https://doi.org/10.1007/s40262-025-01476-6) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Morath_2025_reference](drugs/drug_apixaban/Apixaban_Morath2025_reference.md) | — | 1-compartment (no model) | 0 | Morath B et al., Effect of Amiodarone on Apixaban Exposu…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01534-z](https://doi.org/10.1007/s40262-025-01534-z) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 13:51 | 8:36 | 1/3/0 | 0/0/0 | 0/0/0 | 79,026/33,870 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 47 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ajavon-Hartmann_2025.pdf` | Ajavon-Hartmann A et al., Characterization of Apixaban Pharmacoki…, Clinical pharmacology and t… (2025) | popPK | 10 | [10.1002/cpt.3689](https://doi.org/10.1002/cpt.3689) | [40551722](https://pubmed.ncbi.nlm.nih.gov/40551722) | The paper describes a population PK model for apixaban in pediatric patients, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Gaspar_2023.pdf` | Gaspar F et al., Population pharmacokinetics of apixaban…, CPT: pharmacometrics & syst… (2023) | popPK | 10 | [10.1002/psp4.13032](https://doi.org/10.1002/psp4.13032) | [37723920](https://pubmed.ncbi.nlm.nih.gov/37723920) | The study is a population PK analysis of apixaban, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Kolowrat_2025.pdf` | Kolowrat S et al., Real-World Impact of Amiodarone on Apix…, Clinical and translational… (2025) | popPK | 10 | [10.1111/cts.70392](https://doi.org/10.1111/cts.70392) | [41208245](https://pubmed.ncbi.nlm.nih.gov/41208245) | The study reports a population PK model for apixaban with specific quantitative findings, including a 33% decrease in clearance and geometric mean ratios for exposure metrics. |
| `Konecki_2025.pdf` | Konecki C et al., Population Pharmacokinetic Modelling of…, Clinical pharmacokinetics (2025) | popPK | 10 | [10.1007/s40262-025-01476-6](https://doi.org/10.1007/s40262-025-01476-6) | [39853633](https://pubmed.ncbi.nlm.nih.gov/39853633) | The study reports a population PK model for apixaban with a specific dialytic clearance value (1.20 L/h), but other key parameters like total clearance, volume, and half-life are not explicitly listed in the provided text. |
| `Morath_2025.pdf` | Morath B et al., Effect of Amiodarone on Apixaban Exposu…, Clinical pharmacokinetics (2025) | popPK | 10 | [10.1007/s40262-025-01534-z](https://doi.org/10.1007/s40262-025-01534-z) | [40474043](https://pubmed.ncbi.nlm.nih.gov/40474043) | The study reports a population PK model for apixaban with explicit numeric values for CL/F, Vd/F, and ka in the abstract. |
| `Jaber_2022.pdf` | Jaber A et al., Esomeprazole and apixaban pharmacokinet…, Heliyon (2022) | popPK | 8 | [10.1016/j.heliyon.2022.e11015](https://doi.org/10.1016/j.heliyon.2022.e11015) | [36281394](https://pubmed.ncbi.nlm.nih.gov/36281394) | The study reports non-compartmental PK parameters (Cmax, AUC, Tmax) for apixaban in rats, but specific numeric values are not present in the provided text. |

<sub>queue written 2026-10-05 13:43 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ajavon-Hartmann_2025 | relevant | 10 | 0 | The paper describes a population PK model for apixaban in pediatric patients, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Gaspar_2023 | relevant | 10 | 0 | The study is a population PK analysis of apixaban, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Jaber_2022 | relevant | 8 | 2 | The study reports non-compartmental PK parameters (Cmax, AUC, Tmax) for apixaban in rats, but specific numeric values are not present in the provided text. |
| popPK | Terrier_2022 | irrelevant | 2 | 0 | This is a systematic review that summarizes existing models but does not report original quantitative PK parameter values for apixaban in the provided evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bapixaban%5D&body=Drug%3A%20apixaban%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_apixaban/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-05 13:43 UTC</sub>

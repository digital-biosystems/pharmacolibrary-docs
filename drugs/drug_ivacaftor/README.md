<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R07A&quot;,&quot;href&quot;:&quot;atc/R07A.md&quot;},{&quot;label&quot;:&quot;ivacaftor&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ivacaftor_Truong2025_reference&quot;,&quot;label&quot;:&quot;Truong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# ivacaftor

- **generic name:** ivacaftor
- **ATC codes:** `R07AX02`, `R07AX30`, `R07AX31`
- **DrugBank:** [DB08820](https://go.drugbank.com/drugs/DB08820) · **PubChem:** [CID 16220172](https://pubchem.ncbi.nlm.nih.gov/compound/16220172)
- **molar mass:** 392.4907 g/mol (C24H28N2O3) — DrugBank
- **groups:** approved, investigational

## About

Ivacaftor is a medicine used to treat cystic fibrosis. It is authorised in the European Union and is an approved drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6095693](https://www.wikidata.org/wiki/Q6095693) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ivacaftor | parent | 392.491 | C24H28N2O3 | DrugBank | [16220172](https://pubchem.ncbi.nlm.nih.gov/compound/16220172) | Truong_2025, Vonk_2025 |

## Start here

> **Truong_2025_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> children with cystic fibrosis, n = 96. [Run it in the simulator](drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference.md?tab=Simulation) · [record](drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 13.4 ‡ | L/h | 13.4 L/h/70 kg | children with cystic fibrosis | 96 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Truong_2025_reference](drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference.md) |
| V | V/F | 183 ‡ | L | 183 L/70 kg | children with cystic fibrosis | 96 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Truong_2025_reference](drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference.md) |
| ka | kabs | 0.42 | 1/h | 0.42 h−1 | children with cystic fibrosis | 96 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Truong_2025_reference](drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Truong_2025_reference](drugs/drug_ivacaftor/Ivacaftor_Truong2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Truong NH et al., Elexacaftor/Tezacaftor/Ivacaftor Popula…, Clinical and translational… (2025) | [10.1111/cts.70245](https://doi.org/10.1111/cts.70245) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Magnas_2026_reference](drugs/drug_ivacaftor/Ivacaftor_Magnas2026_reference.md) | — | 1-compartment (no model) | 0 | Magnas P et al., Pregnancy-related effect on elexacaftor…, British journal of clinical… (2026) | [10.1002/bcp.70620](https://doi.org/10.1002/bcp.70620) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Sanders_2026_2_reference](drugs/drug_ivacaftor/Ivacaftor_Sanders2026v2_reference.md) | — | 1-compartment (no model) | 0 | Sanders M et al., Evaluation of the drug interaction betw…, Journal of cystic fibrosis… (2026) | [10.1016/j.jcf.2025.09.002](https://doi.org/10.1016/j.jcf.2025.09.002) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Vonk_2025_elexacaftor_m23](drugs/drug_ivacaftor/Ivacaftor_Vonk2025_elexacaftor_m23.md) | — | 2-compartment (no model) | 5 | Vonk SEM et al., Real-world pharmacokinetics of elexacaf…, Journal of cystic fibrosis… (2025) | [10.1016/j.jcf.2025.03.008](https://doi.org/10.1016/j.jcf.2025.03.008) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [↳ ivacaftor](drugs/drug_ivacaftor/Ivacaftor_Vonk2025_ivacaftor.md) | — | 2-compartment (no model) | 5 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [↳ ivacaftor_m1](drugs/drug_ivacaftor/Ivacaftor_Vonk2025_ivacaftor_m1.md) | — | 2-compartment (no model) | 5 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [↳ ivacaftor_m6](drugs/drug_ivacaftor/Ivacaftor_Vonk2025_ivacaftor_m6.md) | — | 2-compartment (no model) | 5 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [↳ tezacaftor_m1](drugs/drug_ivacaftor/Ivacaftor_Vonk2025_tezacaftor_m1.md) | — | 2-compartment (no model) | 5 |  |  |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ivacaftor).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` carrier, `ORM1` carrier | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CFTR (potentiator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:02 | 2:35 | 1/7/0 | 0/0/0 | 0/0/0 | 242,174/11,109 | einfracz / qwen3.8-27b | 13 | 4/3 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 43 matched, 18 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 8  ·  extracted 1  ·  needs review 0  ·  rejected 7  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bouazza_2024.pdf` | Bouazza N et al., Lumacaftor/Ivacaftor Population Pharmac…, Clinical pharmacokinetics (2024) | popPK | 9 | [10.1007/s40262-023-01342-3](https://doi.org/10.1007/s40262-023-01342-3) | [38310629](https://pubmed.ncbi.nlm.nih.gov/38310629) | The study describes population PK for ivacaftor, but no specific numeric parameter values are present in the provided evidence. |
| `Guimbellot_2025.pdf` | Guimbellot JS et al., Elexacaftor-tezacaftor-ivacaftor pharma…, Journal of cystic fibrosis… (2025) | popPK | 9 | [10.1016/j.jcf.2025.03.010](https://doi.org/10.1016/j.jcf.2025.03.010) | [40121139](https://pubmed.ncbi.nlm.nih.gov/40121139) | The study reports quantitative pharmacokinetic parameters (clearance, AUC) for ivacaftor, but the specific numeric values are not provided in the evidence, likely residing in tables or supplementary material. |
| `Sanders_2026_2.pdf` | Sanders M et al., Evaluation of the drug interaction betw…, Journal of cystic fibrosis… (2026) | popPK | 9 | [10.1016/j.jcf.2025.09.002](https://doi.org/10.1016/j.jcf.2025.09.002) | [40957819](https://pubmed.ncbi.nlm.nih.gov/40957819) | The study reports non-compartmental PK parameters (Cmax, AUC) for ivacaftor in humans with specific numeric values for GMRs, although full disposition parameters like CL or V are not explicitly listed. |
| `Magnas_2025.pdf` | Magnas P et al., Population Pharmacokinetics of Elexacaf…, Clinical pharmacokinetics (2025) | popPK | 7 | [10.1007/s40262-025-01516-1](https://doi.org/10.1007/s40262-025-01516-1) | [40405059](https://pubmed.ncbi.nlm.nih.gov/40405059) | The paper is a human population PK study of a combination therapy containing ivacaftor, but the specific numeric PK parameters (CL, V, ka) for ivacaftor are not explicitly listed in the provided text, only AUC ranges. |
| `Magnas_2026.pdf` | Magnas P et al., Pregnancy-related effect on elexacaftor…, British journal of clinical… (2026) | popPK | 7 | [10.1002/bcp.70620](https://doi.org/10.1002/bcp.70620) | [42185741](https://pubmed.ncbi.nlm.nih.gov/42185741) | The study reports quantitative changes in apparent clearance for ivacaftor (9.64 to 11.36 L/h) in a human population PK context. |

<sub>queue written 2026-10-07 18:00 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bacalhau_2025 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacodynamics/mechanistic study on CFTR channel potentiators and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.) for ivacaftor. |
| popPK | Bouazza_2024 | relevant | 9 | 0 | The study describes population PK for ivacaftor, but no specific numeric parameter values are present in the provided evidence. |
| popPK | Froux_2020 | irrelevant | 0 | 0 | The paper is a mechanistic study on CFTR channel modulation and pharmacodynamics, containing no pharmacokinetic data for ivacaftor. |
| popPK | Guimbellot_2025 | relevant | 9 | 0 | The study reports quantitative pharmacokinetic parameters (clearance, AUC) for ivacaftor, but the specific numeric values are not provided in the evidence, likely residing in tables or supplementary material. |
| popPK | Hong_2023 | irrelevant | 3 | 0 | The study is a clinical case series with PBPK modeling for dose reduction, not a PK parameter estimation study; no quantitative disposition parameters (CL, V, Q, ka, t1/2) for ivacaftor are reported in the evidence. |
| popPK | Hong_2024 | irrelevant | 4 | 0 | The paper describes a case series and PBPK simulation for elexacaftor/tezacaftor/ivacaftor (ETI) and rifabutin, reporting clinical outcomes (efficacy) rather than quantitative ivacaftor disposition parameters (CL, V, etc.) for ivacaftor monotherapy in the evidence provided. |
| popPK | Magnas_2025 | relevant | 7 | 2 | The paper is a human population PK study of a combination therapy containing ivacaftor, but the specific numeric PK parameters (CL, V, ka) for ivacaftor are not explicitly listed in the provided text, only AUC ranges. |
| popPK | Phuan_2015 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on new CFTR potentiators and does not report pharmacokinetic parameters for ivacaftor. |
| popPK | Sagel_2026 | irrelevant | 0 | 0 | The study investigates inflammatory markers (e.g., NE, IL-8, CRP) and clinical outcomes in CF patients treated with ETI, but reports no pharmacokinetic parameters (CL, V, etc.) for ivacaftor. |
| popPK | Sanders_2026 | irrelevant | 1 | 0 | This is a PBPK modeling study focused on drug-drug interaction ratios and exposure changes, not a primary study reporting base quantitative disposition parameters (CL, V, ka) for ivacaftor. |
| popPK | Semenchuk_2024 | irrelevant | 0 | 0 | The paper is a clinical outcomes study examining lung function and BMI trajectories in CF patients after COVID-19 infection, containing no pharmacokinetic parameter values (CL, V, etc.) for ivacaftor. |
| popPK | Solomon_2024 | irrelevant | 0 | 0 | This is a clinical trial evaluating the efficacy of elexacaftor-tezacaftor-ivacaftor on sweat chloride and lung function, with no report of pharmacokinetic parameters for ivacaftor. |
| popPK | Steinberg_2025 | irrelevant | 0 | 0 | The study focuses on the impact of ETI therapy on the respiratory microbiome in cystic fibrosis patients and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for ivacaftor. |
| popPK | Tsai_2020 | irrelevant | 5 | 3 | The study is a PBPK simulation of drug interactions where ivacaftor is one of several substrates, and the specific quantitative PBPK parameters (CL, V, etc.) are located in Supplementary Table S1 which is not provided in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bivacaftor%5D&body=Drug%3A%20ivacaftor%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ivacaftor/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 18:00 UTC</sub>

<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;efavirenz&quot;}]"></div>

# efavirenz

- **generic name:** efavirenz
- **ATC codes:** `J05AG03`, `J05AR06`, `J05AR11`
- **DrugBank:** [DB00625](https://go.drugbank.com/drugs/DB00625) · **PubChem:** [CID 64139](https://pubchem.ncbi.nlm.nih.gov/compound/64139)
- **molar mass:** 315.675 g/mol (C14H9ClF3NO2) — DrugBank
- **groups:** approved, investigational

## About

Efavirenz is a non-nucleoside reverse transcriptase inhibitor used to treat HIV infection and HIV/AIDS. It is widely used, appears on the WHO essential medicines list, and is authorised in the European Union, both alone and in combination antiviral products.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422645](https://www.wikidata.org/wiki/Q422645) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| efavirenz | parent | 315.675 | C14H9ClF3NO2 | DrugBank | [64139](https://pubchem.ncbi.nlm.nih.gov/compound/64139) | Barrett_2002, Chala_2023, Vucicevic_2025 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 2.65 | L/h | 2.65 l/h | healthy volunteers | 334 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Barrett_2002_reference](drugs/drug_efavirenz/Efavirenz_Barrett2002_reference.md) |
| CL | CL | 13.9 | L/h | 13.9 L/h | HIV-1-infected adults | &gt;=18 years | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Vucicevic_2025_reference](drugs/drug_efavirenz/Efavirenz_Vucicevic2025_reference.md) |
| ka | kabs | 0.397 | 1/h | 0.397 h−1 | healthy volunteers | 334 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Barrett_2002_reference](drugs/drug_efavirenz/Efavirenz_Barrett2002_reference.md) |
| ka | kabs | 0.397 | 1/h | 0.397 h−1 | HIV-1-infected adults | &gt;=18 years | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Vucicevic_2025_reference](drugs/drug_efavirenz/Efavirenz_Vucicevic2025_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Barrett_2002 · CL</text><circle cx="264.1" cy="30.0" r="4" fill="#ef6c00"><title>Barrett_2002 · CL: 2.65 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Vucicevic_2025 · CL</text><circle cx="390.0" cy="46.0" r="4" fill="#ef6c00"><title>Vucicevic_2025 · CL: 13.9 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Barrett_2002_reference](drugs/drug_efavirenz/Efavirenz_Barrett2002_reference.md) | — | 1-compartment (no model) | 3 | Barrett JS et al., Population pharmacokinetic meta-analysi…, International journal of cl… (2002) | [10.5414/cpp40507](https://doi.org/10.5414/cpp40507) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Vucicevic_2025_reference](drugs/drug_efavirenz/Efavirenz_Vucicevic2025_reference.md) | — | 1-compartment (no model) | 3 | Vucicevic K et al., Population Pharmacokinetic-Pharmacogene…, Cureus (2025) | [10.7759/cureus.88533](https://doi.org/10.7759/cureus.88533) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Chala_2023_reference](drugs/drug_efavirenz/Efavirenz_Chala2023_reference.md) | — | 1-compartment (no model) | 1 | Chala A et al., Genetic and non-genetic factors influen…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12951](https://doi.org/10.1002/psp4.12951) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ngaimisi_2014_4_hydroxycholesterol](drugs/drug_efavirenz/pd_Ngaimisi_2014_4_hydroxycholesterol.md) | 4β-hydroxycholesterol ← efavirenz · indirect response — drug stimulates the production of 4β-hydroxycholesterol | — | Ngaimisi E et al., Pharmacokinetic and pharmacogenomic mod…, The Journal of antimicrobia… (2014) | [10.1093/jac/dku286](https://doi.org/10.1093/jac/dku286) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=efavirenz).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inducer | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2B6` inducer/substrate, `CYP2C19` inducer, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inducer, `CYP3A7` inducer, `SLC22A1` inhibitor, `UGT1A1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inducer, `UGT1A1` inducer | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:41 | 5:19 | 2/1/0 | 1/0/0 | 0/0/0 | 223,209/13,354 | einfracz / qwen3.8-27b | 26 | 1/9 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 217 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barrett_2002.pdf` | Barrett JS et al., Population pharmacokinetic meta-analysi…, International journal of cl… (2002) | popPK | 10 | [10.5414/cpp40507](https://doi.org/10.5414/cpp40507) | [12698988](https://pubmed.ncbi.nlm.nih.gov/12698988) | The paper presents a population pharmacokinetic model for efavirenz in humans with explicit numeric values for clearance (single and multiple dose), intersubject variability for CL and V, and residual variability. |

<sub>queue written 2026-10-07T12:37:18.212512+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akinrinade_2026 | irrelevant | 0 | 0 | The study characterizes the population pharmacokinetics of lumefantrine (an antimalarial), not efavirenz, even though the subjects are receiving efavirenz-based therapy. |
| popPK | Almeida_2021 | irrelevant | 0 | 0 | The study reports toxicological endpoints (IC50/EC50) in aquatic organisms, not pharmacokinetic disposition parameters for efavirenz. |
| popPK | Calderin_2025 | irrelevant |  |  | The paper focuses on dexamethasone pharmacokinetics and only mentions efavirenz as a co-administered covariate without reporting any quantitative PK parameters for it. |
| popPK | Calderin_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for dexamethasone, with efavirenz mentioned only as a co-administered drug in a small subgroup; no PK parameters for efavirenz are provided. |
| popPK | Collins_2025 | irrelevant |  |  | The study models the pharmacokinetics of midazolam as a probe drug to quantify CYP3A induction by efavirenz, rather than reporting population-PK parameters for efavirenz itself. |
| popPK | Cottrell_2013_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dolutegravir, and efavirenz is only mentioned as a comparator drug in clinical trials. |
| popPK | Courlet_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rosuvastatin, with efavirenz serving only as a covariate for cholesterol levels. |
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | This is a review of lopinavir/ritonavir, and efavirenz is only mentioned as a drug interaction requiring dosage adjustment, not as the subject of PK characterization. |
| popPK | Decloedt_2015 | irrelevant | 1 | 0 | This is a review article that discusses CNS penetration concepts and references a specific CSF:plasma ratio for efavirenz, but it does not report original quantitative disposition parameters like CL, V, or Ka. |
| popPK | Dickinson_2016 | relevant | 10 | 2 | The study is a population PK analysis of efavirenz in humans, but the specific numeric parameter values (CL/F, V/F, etc.) are referred to as being in "Online Resource 1 and 2" and the text notes they were carried forward from a previous 48-week analysis without listing the primary model parameters in the provided evidence. |
| popPK | Guidi_2022_2 | irrelevant | 0 | 0 | The paper is a methodological review of population pharmacokinetics that uses efavirenz only as a conceptual example, without reporting original quantitative disposition parameters. |
| popPK | Nemaura_2019 | irrelevant | 4 | 2 | The paper describes a novel theoretical modeling approach for a single patient with vague formula placeholders rather than standard, clearly readable quantitative population PK parameters like CL or V. |
| popPK | Salinger_2019 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for the drug pretomanid, with efavirenz mentioned only as a co-administered drug affecting pretomanid exposure. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for delamanid, not efavirenz; efavirenz is mentioned only as a co-administered covariate affecting delamanid clearance. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 12:37 UTC</sub>

<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01A&quot;,&quot;href&quot;:&quot;atc/R01A.md&quot;},{&quot;label&quot;:&quot;ciclesonide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ciclesonide_Xu2010_reference&quot;,&quot;label&quot;:&quot;Xu_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ciclesonide/Ciclesonide_Xu2010_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# ciclesonide

- **generic name:** ciclesonide
- **ATC codes:** `R01AD13`, `R03BA08`
- **DrugBank:** [DB01410](https://go.drugbank.com/drugs/DB01410) · **PubChem:** [CID 6918155](https://pubchem.ncbi.nlm.nih.gov/compound/6918155)
- **molar mass:** 540.697 g/mol (C32H44O7) — DrugBank
- **groups:** approved, investigational

## About

Ciclesonide is a glucocorticoid used to treat allergic rhinitis and obstructive airway diseases such as asthma. It is an approved medicine, available as a nasal spray and as an inhaler, and is used in routine clinical practice.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5119448](https://www.wikidata.org/wiki/Q5119448) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ciclesonide | parent | 540.697 | C32H44O7 | DrugBank | [6918155](https://pubchem.ncbi.nlm.nih.gov/compound/6918155) | Rohatagi_2003, Rohatagi_2005, Xu_2010 |
| ciclesonide-active principle (CIC-AP) (des-CIC, desisobutyryl-ciclesonide) | metabolite | 470.606 | C28H38O6 | PubChem | [6918281](https://pubchem.ncbi.nlm.nih.gov/compound/6918281) | Rohatagi_2003, Rohatagi_2005, Xu_2010 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag left at base-class defaults</sub> | [Rohatagi_2003_reference](drugs/drug_ciclesonide/Ciclesonide_Rohatagi2003_reference.md) | held back | 1-compartment, oral | 2 | Rohatagi S et al., Population pharmacokinetics and pharmac…, Journal of clinical pharmac… (2003) | [10.1177/0091270002250998](https://doi.org/10.1177/0091270002250998) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag left at base-class defaults</sub> | [Rohatagi_2005_reference](drugs/drug_ciclesonide/Ciclesonide_Rohatagi2005_reference.md) | held back | 1-compartment, oral | 2 | Rohatagi S et al., Model-based covariate pharmacokinetic a…, American journal of therape… (2005) | [10.1097/01.mjt.0000155110.69831.75](https://doi.org/10.1097/01.mjt.0000155110.69831.75) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub> | [Xu_2010_reference](drugs/drug_ciclesonide/Ciclesonide_Xu2010_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Xu J et al., Population pharmacokinetics and pharmac…, Journal of clinical pharmac… (2010) | [10.1177/0091270009354994](https://doi.org/10.1177/0091270009354994) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Pu_2026_COPD_exacerbations](drugs/drug_ciclesonide/pd_Pu_2026_COPD_exacerbations.md) | COPD exacerbations ← ciclesonide · direct Emax (saturable) effect | — | Pu X et al., Adverse events of inhaled corticosteroi…, BMJ evidence-based medicine (2026) | [10.1136/bmjebm-2024-113216](https://doi.org/10.1136/bmjebm-2024-113216) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Pu_2026_URTI](drugs/drug_ciclesonide/pd_Pu_2026_URTI.md) | upper respiratory tract infection ← ciclesonide · direct Emax (saturable) effect | — | Pu X et al., Adverse events of inhaled corticosteroi…, BMJ evidence-based medicine (2026) | [10.1136/bmjebm-2024-113216](https://doi.org/10.1136/bmjebm-2024-113216) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Pu_2026_all_cause_mortality](drugs/drug_ciclesonide/pd_Pu_2026_all_cause_mortality.md) | all-cause mortality ← ciclesonide · direct Emax (saturable) effect | — | Pu X et al., Adverse events of inhaled corticosteroi…, BMJ evidence-based medicine (2026) | [10.1136/bmjebm-2024-113216](https://doi.org/10.1136/bmjebm-2024-113216) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Pu_2026_asthma_exacerbations](drugs/drug_ciclesonide/pd_Pu_2026_asthma_exacerbations.md) | asthma exacerbations ← ciclesonide · direct Emax (saturable) effect | — | Pu X et al., Adverse events of inhaled corticosteroi…, BMJ evidence-based medicine (2026) | [10.1136/bmjebm-2024-113216](https://doi.org/10.1136/bmjebm-2024-113216) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Pu_2026_cataract](drugs/drug_ciclesonide/pd_Pu_2026_cataract.md) | cataract ← ciclesonide · direct Emax (saturable) effect | — | Pu X et al., Adverse events of inhaled corticosteroi…, BMJ evidence-based medicine (2026) | [10.1136/bmjebm-2024-113216](https://doi.org/10.1136/bmjebm-2024-113216) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Pu_2026_diabetes](drugs/drug_ciclesonide/pd_Pu_2026_diabetes.md) | diabetes ← ciclesonide · direct Emax (saturable) effect | — | Pu X et al., Adverse events of inhaled corticosteroi…, BMJ evidence-based medicine (2026) | [10.1136/bmjebm-2024-113216](https://doi.org/10.1136/bmjebm-2024-113216) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Pu_2026_fracture](drugs/drug_ciclesonide/pd_Pu_2026_fracture.md) | fracture ← ciclesonide · direct Emax (saturable) effect | — | Pu X et al., Adverse events of inhaled corticosteroi…, BMJ evidence-based medicine (2026) | [10.1136/bmjebm-2024-113216](https://doi.org/10.1136/bmjebm-2024-113216) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Pu_2026_oral_candidiasis](drugs/drug_ciclesonide/pd_Pu_2026_oral_candidiasis.md) | oral candidiasis ← ciclesonide · direct Emax (saturable) effect | — | Pu X et al., Adverse events of inhaled corticosteroi…, BMJ evidence-based medicine (2026) | [10.1136/bmjebm-2024-113216](https://doi.org/10.1136/bmjebm-2024-113216) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Pu_2026_plasma_cortisol_abnormalities](drugs/drug_ciclesonide/pd_Pu_2026_plasma_cortisol_abnormalities.md) | plasma cortisol abnormalities ← ciclesonide · direct Emax (saturable) effect | — | Pu X et al., Adverse events of inhaled corticosteroi…, BMJ evidence-based medicine (2026) | [10.1136/bmjebm-2024-113216](https://doi.org/10.1136/bmjebm-2024-113216) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Pu_2026_pneumonia](drugs/drug_ciclesonide/pd_Pu_2026_pneumonia.md) | pneumonia ← ciclesonide · direct Emax (saturable) effect | — | Pu X et al., Adverse events of inhaled corticosteroi…, BMJ evidence-based medicine (2026) | [10.1136/bmjebm-2024-113216](https://doi.org/10.1136/bmjebm-2024-113216) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Rohatagi_2003_cortisol](drugs/drug_ciclesonide/pd_Rohatagi_2003_cortisol.md) | endogenous cortisol ← ciclesonide--active principle (CIC-AP) · indirect response — drug inhibits the production of endogenous cortisol | model (no simulator) | Rohatagi S et al., Population pharmacokinetics and pharmac…, Journal of clinical pharmac… (2003) | [10.1177/0091270002250998](https://doi.org/10.1177/0091270002250998) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Rohatagi_2005_cortisol](drugs/drug_ciclesonide/pd_Rohatagi_2005_cortisol.md) | circadian endogenous cortisol release ← des-CIC (C21-desisobutyryl-ciclesonide) · direct Emax (saturable) effect | — | Rohatagi S et al., Model-based covariate pharmacokinetic a…, American journal of therape… (2005) | [10.1097/01.mjt.0000155110.69831.75](https://doi.org/10.1097/01.mjt.0000155110.69831.75) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ciclesonide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CES1` substrate, `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: NR3C1 (target), SERPINA6 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:42 | 1:00 | 2/1/0 | 2/1/0 | 0/0/0 | 37,220/6,475 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rohatagi_2003.pdf` | Rohatagi S et al., Population pharmacokinetics and pharmac…, Journal of clinical pharmac… (2003) | popPK | 10 | [10.1177/0091270002250998](https://doi.org/10.1177/0091270002250998) | [12723457](https://pubmed.ncbi.nlm.nih.gov/12723457) | Population PK model of ciclesonide's active metabolite (CIC-AP) with numeric CL and V values reported directly in the abstract. |
| `Rohatagi_2005.pdf` | Rohatagi S et al., Model-based covariate pharmacokinetic a…, American journal of therape… (2005) | popPK | 10 | [10.1097/01.mjt.0000155110.69831.75](https://doi.org/10.1097/01.mjt.0000155110.69831.75) | [16148423](https://pubmed.ncbi.nlm.nih.gov/16148423) | Population PK of des-CIC (active metabolite of ciclesonide) with numeric CL (302 L/h) and V (1310 L) reported in the abstract; ka and full parameter table may be in the paper body. |
| `Xu_2010.pdf` | Xu J et al., Population pharmacokinetics and pharmac…, Journal of clinical pharmac… (2010) | popPK | 10 | [10.1177/0091270009354994](https://doi.org/10.1177/0091270009354994) | [20150524](https://pubmed.ncbi.nlm.nih.gov/20150524) | Population PK model of Des-CIC (active metabolite of ciclesonide) with numeric ka, CL, and V reported directly in the abstract. |

<sub>queue written 2026-10-07 12:41 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Pu_2026 | irrelevant | 0 | 0 | This is a safety meta-analysis of inhaled corticosteroids; ciclesonide appears only as a comparator with no PK parameters reported. |
| popPK | Sanz_2025 | irrelevant | 0 | 0 | This is a clinical efficacy study of inhaled ciclesonide in horses with asthma; no PK parameters (CL, V, ka, half-life, or PK model) are reported anywhere in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bciclesonide%5D&body=Drug%3A%20ciclesonide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ciclesonide/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 12:41 UTC</sub>

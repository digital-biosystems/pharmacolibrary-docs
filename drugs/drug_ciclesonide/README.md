<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01A&quot;,&quot;href&quot;:&quot;atc/R01A.md&quot;},{&quot;label&quot;:&quot;ciclesonide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ciclesonide_Xu2010_reference&quot;,&quot;label&quot;:&quot;Xu_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ciclesonide/Ciclesonide_Xu2010_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:42 | 1:00 | 0/1/2 | 1/1/1 | 0/0/0 | 37,220/6,475 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Rohatagi_2003_reference](drugs/drug_ciclesonide/Ciclesonide_Rohatagi2003_reference.md) | held back | 1-compartment, oral | 2 | Rohatagi S et al., Population pharmacokinetics and pharmac…, Journal of clinical pharmac… (2003) | [10.1177/0091270002250998](https://doi.org/10.1177/0091270002250998) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.111). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Rohatagi_2005_reference](drugs/drug_ciclesonide/Ciclesonide_Rohatagi2005_reference.md) | held back | 1-compartment, oral | 2 | Rohatagi S et al., Model-based covariate pharmacokinetic a…, American journal of therape… (2005) | [10.1097/01.mjt.0000155110.69831.75](https://doi.org/10.1097/01.mjt.0000155110.69831.75) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.455). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub><br><sub>route_to: `engineer`</sub> | [Xu_2010_reference](drugs/drug_ciclesonide/Ciclesonide_Xu2010_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Xu J et al., Population pharmacokinetics and pharmac…, Journal of clinical pharmac… (2010) | [10.1177/0091270009354994](https://doi.org/10.1177/0091270009354994) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Pu_2026_COPD_exacerbations](drugs/drug_ciclesonide/pd_Pu_2026_COPD_exacerbations.md) | COPD exacerbations ← ciclesonide · direct Emax (saturable) effect | — | Pu X et al., Adverse events of inhaled corticosteroi…, BMJ evidence-based medicine (2026) | [10.1136/bmjebm-2024-113216](https://doi.org/10.1136/bmjebm-2024-113216) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pu_2026_URTI](drugs/drug_ciclesonide/pd_Pu_2026_URTI.md) | upper respiratory tract infection ← ciclesonide · direct Emax (saturable) effect | — | Pu X et al., Adverse events of inhaled corticosteroi…, BMJ evidence-based medicine (2026) | [10.1136/bmjebm-2024-113216](https://doi.org/10.1136/bmjebm-2024-113216) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pu_2026_all_cause_mortality](drugs/drug_ciclesonide/pd_Pu_2026_all_cause_mortality.md) | all-cause mortality ← ciclesonide · direct Emax (saturable) effect | — | Pu X et al., Adverse events of inhaled corticosteroi…, BMJ evidence-based medicine (2026) | [10.1136/bmjebm-2024-113216](https://doi.org/10.1136/bmjebm-2024-113216) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pu_2026_asthma_exacerbations](drugs/drug_ciclesonide/pd_Pu_2026_asthma_exacerbations.md) | asthma exacerbations ← ciclesonide · direct Emax (saturable) effect | — | Pu X et al., Adverse events of inhaled corticosteroi…, BMJ evidence-based medicine (2026) | [10.1136/bmjebm-2024-113216](https://doi.org/10.1136/bmjebm-2024-113216) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pu_2026_cataract](drugs/drug_ciclesonide/pd_Pu_2026_cataract.md) | cataract ← ciclesonide · direct Emax (saturable) effect | — | Pu X et al., Adverse events of inhaled corticosteroi…, BMJ evidence-based medicine (2026) | [10.1136/bmjebm-2024-113216](https://doi.org/10.1136/bmjebm-2024-113216) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pu_2026_diabetes](drugs/drug_ciclesonide/pd_Pu_2026_diabetes.md) | diabetes ← ciclesonide · direct Emax (saturable) effect | — | Pu X et al., Adverse events of inhaled corticosteroi…, BMJ evidence-based medicine (2026) | [10.1136/bmjebm-2024-113216](https://doi.org/10.1136/bmjebm-2024-113216) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pu_2026_fracture](drugs/drug_ciclesonide/pd_Pu_2026_fracture.md) | fracture ← ciclesonide · direct Emax (saturable) effect | — | Pu X et al., Adverse events of inhaled corticosteroi…, BMJ evidence-based medicine (2026) | [10.1136/bmjebm-2024-113216](https://doi.org/10.1136/bmjebm-2024-113216) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pu_2026_oral_candidiasis](drugs/drug_ciclesonide/pd_Pu_2026_oral_candidiasis.md) | oral candidiasis ← ciclesonide · direct Emax (saturable) effect | — | Pu X et al., Adverse events of inhaled corticosteroi…, BMJ evidence-based medicine (2026) | [10.1136/bmjebm-2024-113216](https://doi.org/10.1136/bmjebm-2024-113216) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pu_2026_plasma_cortisol_abnormalities](drugs/drug_ciclesonide/pd_Pu_2026_plasma_cortisol_abnormalities.md) | plasma cortisol abnormalities ← ciclesonide · direct Emax (saturable) effect | — | Pu X et al., Adverse events of inhaled corticosteroi…, BMJ evidence-based medicine (2026) | [10.1136/bmjebm-2024-113216](https://doi.org/10.1136/bmjebm-2024-113216) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pu_2026_pneumonia](drugs/drug_ciclesonide/pd_Pu_2026_pneumonia.md) | pneumonia ← ciclesonide · direct Emax (saturable) effect | — | Pu X et al., Adverse events of inhaled corticosteroi…, BMJ evidence-based medicine (2026) | [10.1136/bmjebm-2024-113216](https://doi.org/10.1136/bmjebm-2024-113216) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Rohatagi_2003_cortisol](drugs/drug_ciclesonide/pd_Rohatagi_2003_cortisol.md) | endogenous cortisol ← ciclesonide--active principle (CIC-AP) · indirect response — drug inhibits the production of endogenous cortisol | model (no simulator) | Rohatagi S et al., Population pharmacokinetics and pharmac…, Journal of clinical pharmac… (2003) | [10.1177/0091270002250998](https://doi.org/10.1177/0091270002250998) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rohatagi_2005_cortisol](drugs/drug_ciclesonide/pd_Rohatagi_2005_cortisol.md) | circadian endogenous cortisol release ← des-CIC (C21-desisobutyryl-ciclesonide) · direct Emax (saturable) effect | — | Rohatagi S et al., Model-based covariate pharmacokinetic a…, American journal of therape… (2005) | [10.1097/01.mjt.0000155110.69831.75](https://doi.org/10.1097/01.mjt.0000155110.69831.75) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ciclesonide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CES1` substrate, `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: NR3C1 (target), SERPINA6 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rohatagi_2003.pdf` | Rohatagi S et al., Population pharmacokinetics and pharmac…, Journal of clinical pharmac… (2003) | popPK | 10 | [10.1177/0091270002250998](https://doi.org/10.1177/0091270002250998) | [12723457](https://pubmed.ncbi.nlm.nih.gov/12723457) | Population PK model of ciclesonide's active metabolite (CIC-AP) with numeric CL and V values reported directly in the abstract. |
| `Rohatagi_2005.pdf` | Rohatagi S et al., Model-based covariate pharmacokinetic a…, American journal of therape… (2005) | popPK | 10 | [10.1097/01.mjt.0000155110.69831.75](https://doi.org/10.1097/01.mjt.0000155110.69831.75) | [16148423](https://pubmed.ncbi.nlm.nih.gov/16148423) | Population PK of des-CIC (active metabolite of ciclesonide) with numeric CL (302 L/h) and V (1310 L) reported in the abstract; ka and full parameter table may be in the paper body. |
| `Xu_2010.pdf` | Xu J et al., Population pharmacokinetics and pharmac…, Journal of clinical pharmac… (2010) | popPK | 10 | [10.1177/0091270009354994](https://doi.org/10.1177/0091270009354994) | [20150524](https://pubmed.ncbi.nlm.nih.gov/20150524) | Population PK model of Des-CIC (active metabolite of ciclesonide) with numeric ka, CL, and V reported directly in the abstract. |

<sub>queue written 2026-10-07T12:41:38.819272+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Pu_2026 | irrelevant | 0 | 0 | This is a safety meta-analysis of inhaled corticosteroids; ciclesonide appears only as a comparator with no PK parameters reported. |
| popPK | Sanz_2025 | irrelevant | 0 | 0 | This is a clinical efficacy study of inhaled ciclesonide in horses with asthma; no PK parameters (CL, V, ka, half-life, or PK model) are reported anywhere in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:41 UTC</sub>

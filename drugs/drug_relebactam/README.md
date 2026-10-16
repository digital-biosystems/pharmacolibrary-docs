<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;Relebactam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Relebactam_Principe2022_reference&quot;,&quot;label&quot;:&quot;Principe_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_relebactam/Relebactam_Principe2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Relebactam

- **generic name:** Relebactam
- **ATC codes:** `J01DH56`
- **DrugBank:** [DB12377](https://go.drugbank.com/drugs/DB12377) · **PubChem:** [CID 44129647](https://pubchem.ncbi.nlm.nih.gov/compound/44129647)
- **molar mass:** 348.37 g/mol (C12H20N4O6S) — DrugBank
- **groups:** approved

## About

Relebactam is a beta-lactamase inhibitor used to treat serious bacterial infections, given alongside a carbapenem antibiotic. It is an approved medicine, used mainly in hospital settings for infections caused by resistant bacteria.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27252695](https://www.wikidata.org/wiki/Q27252695) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| relebactam | parent | 348.37 | C12H20N4O6S | DrugBank | [44129647](https://pubchem.ncbi.nlm.nih.gov/compound/44129647) | Bhagunde_2019 |
| relebactam and imipenem | metabolite | 299.345 | C12H17N3O4S | PubChem | [104838](https://pubchem.ncbi.nlm.nih.gov/compound/104838) | Bhagunde_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 00:34 | 4:45 | 1/3/1 | 1/0/0 | 0/0/0 | 346,795/26,260 | einfracz / qwen3.8-27b | 8 | 0/8 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Principe_2022_reference](drugs/drug_relebactam/Relebactam_Principe2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Principe L et al., Microbiological, Clinical, and PK/PD Fe…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15040463](https://doi.org/10.3390/ph15040463) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.545). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Cl, Vd, k12 left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Bhagunde_2019_reference](drugs/drug_relebactam/Relebactam_Bhagunde2019_reference.md) | held back | 2-compartment, IV | 4 (+1 cov.) | Bhagunde P et al., Population Pharmacokinetic Analysis for…, CPT: pharmacometrics & syst… (2019) | [10.1002/psp4.12462](https://doi.org/10.1002/psp4.12462) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Fratoni_2022_reference](drugs/drug_relebactam/Relebactam_Fratoni2022_reference.md) | — | 1-compartment (no model) | 0 | Fratoni AJ et al., Imipenem/cilastatin/relebactam pharmaco…, The Journal of antimicrobia… (2022) | [10.1093/jac/dkac261](https://doi.org/10.1093/jac/dkac261) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Fratoni_2024_reference](drugs/drug_relebactam/Relebactam_Fratoni2024_reference.md) | — | 1-compartment (no model) | 0 | Fratoni AJ et al., Imipenem/relebactam pharmacokinetics in…, The Journal of antimicrobia… (2024) | [10.1093/jac/dkae079](https://doi.org/10.1093/jac/dkae079) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.556). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Patel_2022_reference](drugs/drug_relebactam/Relebactam_Patel2022_reference.md) | — | 1-compartment (no model) | 0 | Patel M et al., Population pharmacokinetic/pharmacodyna…, Clinical and translational… (2022) | [10.1111/cts.13158](https://doi.org/10.1111/cts.13158) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bhagunde_2019_2_bacterial_load](drugs/drug_relebactam/pd_Bhagunde_2019_2_bacterial_load.md) | bacterial kill ← relebactam · inhibition effect | — | Bhagunde P et al., A translational pharmacokinetic/pharmac…, International journal of in… (2019) | [10.1016/j.ijid.2019.08.026](https://doi.org/10.1016/j.ijid.2019.08.026) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=relebactam).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | `SLC22A8` substrate, `SLC47A1` substrate, `SLC47A2` substrate | DrugBank actor |
| excretion | liver | `SLC47A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: SLC22A11 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 1  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fratoni_2022.pdf` | Fratoni AJ et al., Imipenem/cilastatin/relebactam pharmaco…, The Journal of antimicrobia… (2022) | popPK | 10 | [10.1093/jac/dkac261](https://doi.org/10.1093/jac/dkac261) | [35906810](https://pubmed.ncbi.nlm.nih.gov/35906810) | The abstract reports specific population PK parameters (CL, Vc, k12, k21) for relebactam in human patients. |
| `Fratoni_2024.pdf` | Fratoni AJ et al., Imipenem/relebactam pharmacokinetics in…, The Journal of antimicrobia… (2024) | popPK | 10 | [10.1093/jac/dkae079](https://doi.org/10.1093/jac/dkae079) | [38517465](https://pubmed.ncbi.nlm.nih.gov/38517465) | The study reports quantitative population pharmacokinetic parameters (CL, Vc, K12, K21) for relebactam in critically ill patients on ECMO. |

<sub>queue written 2026-10-15T00:30:34.880360+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Assefa_2024 | irrelevant | 1 | 0 | The paper is a systematic review of PK/PD targets (exposure ratios) for beta-lactamase inhibitors, not a study reporting quantitative disposition parameters (CL, V, Q) for relebactam. |
| popPK | Bhagunde_2019_2 | irrelevant | 2 | 0 | The paper describes an in vitro PK/PD model using checkerboard and hollow fiber data, without reporting quantitative in vivo disposition parameters (CL, V, ka) for relebactam. |
| popPK | Gatti_2021 | irrelevant | 0 | 0 | The paper is a review focusing on other beta-lactams and beta-lactamase inhibitors (e.g., ceftazidime-avibactam, cefiderocol) and does not report any data for relebactam. |
| popPK | Gatti_2023 | irrelevant | 0 | 0 | The paper is a review discussing PK/PD optimization of beta-lactams for Gram-negative infections, but relebactam is not the subject and no quantitative PK parameters are provided. |
| popPK | Lombardi_2024 | irrelevant | 0 | 0 | The paper is a clinical review of antibiotics in liver transplantation and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for relebactam. |
| popPK | Lombardi_2026 | irrelevant | 0 | 0 | The paper is a clinical review of new antibiotics in lung transplantation and discusses relebactam only as part of a drug combination for efficacy and safety, without reporting original quantitative pharmacokinetic parameters (CL, V, etc.) for relebactam. |
| popPK | Patel_2026 | irrelevant | 2 | 2 | This is an exposure-efficacy analysis using empirical Bayesian estimates from a previously developed population PK model, reporting only PK/PD indices (fAUC/MIC) and efficacy outcomes rather than the specific quantitative pharmacokinetic parameters (CL, V, Q) for relebactam itself. |
| popPK | Principe_2022 | irrelevant | 0 | 0 | The paper is a review of new anti-Gram-negative antibiotics; relebactam is only listed in the abstract as part of a combination (imipenem/relebactam) but no specific pharmacokinetic parameters or values for relebactam are provided in the evidence. |
| popPK | Rando_2024 | irrelevant | 2 | 0 | This is a systematic review summarizing multiple studies including imipenem/cilastatin/relebactam, but the provided evidence does not contain specific quantitative PK parameter values (CL, V, etc.) for relebactam. |
| popPK | Roberts_2023 | irrelevant | 1 | 0 | This is a clinical efficacy/safety analysis that uses pre-existing PK models for simulations, but it does not report new quantitative PK parameter estimates (e.g., clearance, volume) for relebactam itself in the text provided. |
| popPK | Shen_2023 | irrelevant | 1 | 0 | This is a narrative review discussing PK/PD modeling strategies for antibiotics including relebactam, but it does not present original quantitative population-PK parameter values (CL, V, Q, etc.) in the provided text. |
| popPK | Shi_2026 | irrelevant | 0 | 0 | The paper is a simulation study evaluating dosing regimens and cost, and it does not report original quantitative PK parameters (such as CL, V, or ka) for relebactam. |
| popPK | Takahashi_2026 | irrelevant | 0 | 0 | The paper is a methodological case study on NCA sampling windows and does not report specific PK parameters for relebactam. |
| popPK | Zhanel_2018 | irrelevant | 3 | 4 | This is a review article describing relebactam as a beta-lactamase inhibitor, not the subject drug for PK parameter extraction, though it cites approximate Vd and half-life. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 00:30 UTC</sub>

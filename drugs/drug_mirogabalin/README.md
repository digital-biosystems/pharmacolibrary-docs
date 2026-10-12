<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;mirogabalin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mirogabalin_Li2023_reference&quot;,&quot;label&quot;:&quot;Li_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mirogabalin/Mirogabalin_Li2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# mirogabalin

- **generic name:** mirogabalin
- **ATC codes:** `N02BF03`
- **DrugBank:** [DB11825](https://go.drugbank.com/drugs/DB11825) · **PubChem:** [CID 59509752](https://pubchem.ncbi.nlm.nih.gov/compound/59509752)
- **molar mass:** 209.289 g/mol (C12H19NO2) — DrugBank
- **groups:** investigational

## About

Mirogabalin is a gabapentinoid drug developed as an analgesic for neuropathic pain. It is not authorised in the European Union and is still considered investigational in major drug databases, though it has been approved for use in Japan.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20706932](https://www.wikidata.org/wiki/Q20706932) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mirogabalin | parent | 209.289 | C12H19NO2 | DrugBank | [59509752](https://pubchem.ncbi.nlm.nih.gov/compound/59509752) | Yin_2016 |
| lactam metabolite | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:27 | 1:55 | 0/1/1 | 1/0/0 | 0/0/0 | 135,601/12,087 | einfracz / qwen3.8-27b | 6 | 2/5 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.818). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Li_2023_reference](drugs/drug_mirogabalin/Mirogabalin_Li2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Li Y et al., Safety, Tolerability and Pharmacokineti…, Advances in therapy (2023) | [10.1007/s12325-022-02424-7](https://doi.org/10.1007/s12325-022-02424-7) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.333). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Yin_2016_reference](drugs/drug_mirogabalin/Mirogabalin_Yin2016_reference.md) | — | parent + metabolite (no model) | 3 | Yin OQ et al., Population pharmacokinetic modeling and…, Journal of clinical pharmac… (2016) | [10.1002/jcph.584](https://doi.org/10.1002/jcph.584) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Wu_2022_INa_L](drugs/drug_mirogabalin/pd_Wu_2022_INa_L.md) | sustained (late) INa (INa(L)) ← mirogabalin · direct sigmoid Emax (Hill) effect | — | Wu CL et al., The Evidence for Effective Inhibition o…, International journal of mo… (2022) | [10.3390/ijms23073845](https://doi.org/10.3390/ijms23073845) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Wu_2022_INa_T](drugs/drug_mirogabalin/pd_Wu_2022_INa_T.md) | transient (peak) INa (INa(T)) ← mirogabalin · direct sigmoid Emax (Hill) effect | — | Wu CL et al., The Evidence for Effective Inhibition o…, International journal of mo… (2022) | [10.3390/ijms23073845](https://doi.org/10.3390/ijms23073845) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 5  ·  **relevant:** 4
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yin_2016.pdf` | Yin OQ et al., Population pharmacokinetic modeling and…, Journal of clinical pharmac… (2016) | popPK | 10 | [10.1002/jcph.584](https://doi.org/10.1002/jcph.584) | [26138993](https://pubmed.ncbi.nlm.nih.gov/26138993) | The paper reports a population PK model for mirogabalin with clear quantitative effects (percent changes in clearance and AUC/Cmax) and covariate relationships, although specific absolute parameter estimates (e.g., CL value in L/h) are not explicitly listed in the provided text. |
| `Hutmacher_2016.pdf` | Hutmacher MM et al., Exposure-response modeling of average d…, Journal of clinical pharmac… (2016) | pd | 5 | [10.1002/jcph.567](https://doi.org/10.1002/jcph.567) | [26073181](https://www.ncbi.nlm.nih.gov/pubmed/26073181) | metadata signals extractable PD data (Exposure-response) |
| `Ahmad_2021.pdf` | Ahmad KA et al., Microglial IL-10 and β-endorphin expres…, Brain, behavior, and immuni… (2021) | pd | 4 | [10.1016/j.bbi.2021.04.007](https://doi.org/10.1016/j.bbi.2021.04.007) | [33862171](https://www.ncbi.nlm.nih.gov/pubmed/33862171) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-07T06:26:03.647874+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2021 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PD | Ahmad_2021 | not_relevant | 0 | 0 | The paper focuses on the molecular mechanism (microglial IL-10 and β-endorphin) of gabapentinoids' antineuropathic pain effect and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for mirogabalin. |
| popPK | Calandre_2016 | irrelevant | 1 | 0 | The paper is a review of clinical pharmacology and therapeutic use without original quantitative PK parameter values for mirogabalin. |
| PD | Calandre_2016 | not_relevant | 1 | 0 | The text is a review summary that qualitatively describes clinical efficacy and safety but does not report any numeric pharmacodynamic parameters or exposure-response relationships. |
| popPK | Hong_2024 | irrelevant | 0 | 0 | The paper is a pharmacodynamic model-based meta-analysis focusing on efficacy and placebo effects, not a pharmacokinetic study reporting disposition parameters like clearance or volume for mirogabalin. |
| popPK | Hutmacher_2016 | irrelevant | 0 | 0 | no_text gate: only 165 chars of text extracted (&lt; 400) |
| PD | Jansen_2018 | not_relevant | 0 | 0 | The study focuses on pharmacokinetics and safety/tolerability (adverse events) without reporting quantitative pharmacodynamic parameters or exposure-response modeling. |
| popPK | Jansen_2018_2 | irrelevant | 2 | 0 | The study is a drug-drug interaction trial reporting only relative changes (ratios) in peak concentration, not absolute quantitative disposition parameters (CL, V, t1/2) for mirogabalin. |
| PD | Jansen_2018_2 | not_relevant | 2 | 1 | The paper reports qualitative PD changes and PK interaction ratios (Cmax) but does not provide numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves for mirogabalin. |
| popPK | Kitano_2019 | irrelevant | 4 | 2 | The paper is a review that summarizes PK properties (half-life, clearance, protein binding) but does not present original quantitative population-PK model parameters (CL, V, Q, ka) or a compartmental model for mirogabalin. |
| PGx | Sloan_2022 | not_relevant | 0 | 0 | The paper is a review of the treatment of painful diabetic neuropathy and does not report pharmacogenomic effects on the PK or PD of mirogabalin. |
| popPK | Song_2026 | irrelevant | 0 | 0 | no_text gate: only 212 chars of text extracted (&lt; 400) |
| popPK | Tang_2023 | relevant | 4 | 6 | The paper is a review that reports quantitative PK parameters (CL, T1/2, renal clearance) for mirogabalin, but it lacks a compartmental or population-PK model and volume of distribution values. |
| PD | Tang_2023 | not_relevant | 2 | 0 | The paper is a narrative review summarizing clinical trials and does not present original pharmacodynamic modeling or extractable numeric PD parameters (e.g., Emax, EC50) for mirogabalin. |
| popPK | Wu_2022 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study investigating the mechanism of action (Na+ channel inhibition) of mirogabalin, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Zajączkowska_2021 | irrelevant | 3 | 2 | The paper is a narrative review that summarizes PK properties (half-life, Tmax, protein binding) but does not report original quantitative compartmental parameters (CL, V, Q, ka) or population PK model estimates. |
| PD | Zajączkowska_2021 | not_relevant | 2 | 1 | The text is a review article discussing mechanism of action and general PK/PD properties without providing specific numeric PD parameters or extractable concentration-effect curves. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:26 UTC</sub>

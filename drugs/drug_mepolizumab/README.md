<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;mepolizumab&quot;}]"></div>

# mepolizumab

- **generic name:** mepolizumab
- **ATC codes:** `R03DX09`
- **DrugBank:** [DB06612](https://go.drugbank.com/drugs/DB06612) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Mepolizumab, a monoclonal antibody, is used to treat asthma, hypereosinophilic syndrome, and Churg-Strauss syndrome. It is authorised in the European Union and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3306175](https://www.wikidata.org/wiki/Q3306175) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:57 | 1:34 | 0/1/0 | 0/0/0 | 0/0/0 | 80,098/5,876 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.636). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Smith_2011_reference](drugs/drug_mepolizumab/Mepolizumab_Smith2011_reference.md) | — | 1-compartment (no model) | 0 | Smith DA et al., Pharmacokinetics and pharmacodynamics o…, Clinical pharmacokinetics (2011) | [10.2165/11584340-000000000-00000](https://doi.org/10.2165/11584340-000000000-00000) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Smith_2011.pdf` | Smith DA et al., Pharmacokinetics and pharmacodynamics o…, Clinical pharmacokinetics (2011) | popPK | 10 | [10.2165/11584340-000000000-00000](https://doi.org/10.2165/11584340-000000000-00000) | [21348536](https://pubmed.ncbi.nlm.nih.gov/21348536) | The abstract explicitly reports quantitative pharmacokinetic parameters including clearance, volume of distribution, half-life, and bioavailability for mepolizumab in humans. |
| `Ramanathan_2025.pdf` | Ramanathan M et al., Diffusion dimensionality modeling of su…, Journal of pharmacokinetics… (2025) | popPK | 6 | [10.1007/s10928-025-09973-8](https://doi.org/10.1007/s10928-025-09973-8) | [40263185](https://pubmed.ncbi.nlm.nih.gov/40263185) | The study reports a PK model (diffusion dimensionality) that fits mepolizumab absorption data, identifying the 3D equation as the best fit, but specific quantitative parameter values (e.g., Ka, CL) are not listed in the evidence provided. |

<sub>queue written 2026-10-07T21:56:05.297065+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gershuny_2023 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic (PD) biomarkers (eosinophils) and modeling of dose-response, with no quantitative pharmacokinetic (PK) parameters (CL, V, t1/2) for mepolizumab reported in the evidence. |
| popPK | Gupta_2026 | relevant | 5 | 2 | The paper reports a population PK model for mepolizumab but does not provide the specific quantitative parameter values (e.g., clearance, volume, half-life) in the text, referencing figures and supplementary material instead. |
| popPK | Han_2019 | irrelevant | 0 | 0 | The study is a retrospective review of BMI changes in pediatric asthma patients and does not report any pharmacokinetic parameters for mepolizumab. |
| popPK | Matera_2017 | irrelevant | 0 | 0 | The paper focuses on benralizumab; mepolizumab is only mentioned as a comparator with no PK parameters reported. |
| popPK | Owora_2026 | irrelevant | 0 | 0 | The paper reports on clinical effectiveness (exacerbation rates) in pediatric asthma and contains no pharmacokinetic parameters for mepolizumab. |
| popPK | Ramanathan_2025 | relevant | 6 | 2 | The study reports a PK model (diffusion dimensionality) that fits mepolizumab absorption data, identifying the 3D equation as the best fit, but specific quantitative parameter values (e.g., Ka, CL) are not listed in the evidence provided. |
| popPK | Vergles_2026 | irrelevant | 0 | 0 | The paper is a clinical study on dosing interval extension for asthma control and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for mepolizumab. |
| popPK | Zecchin_2026 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetic and pharmacodynamic modeling of depemokimab, using mepolizumab only as a comparator agent for efficacy targets rather than reporting quantitative PK parameters for mepolizumab itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:56 UTC</sub>

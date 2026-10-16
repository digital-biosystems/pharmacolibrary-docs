<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;efalizumab&quot;}]"></div>

# efalizumab

- **generic name:** efalizumab
- **ATC codes:** `L04AA21`, `L04AG02`
- **DrugBank:** [DB00095](https://go.drugbank.com/drugs/DB00095) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Efalizumab, a monoclonal antibody immunosuppressant, was used to treat psoriasis. It was withdrawn from the market, including in the European Union, and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418270](https://www.wikidata.org/wiki/Q418270) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 22:01 | 0:57 | 0/2/0 | 1/0/0 | 0/0/0 | 12,674/1,266 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Bauer_1999_reference](drugs/drug_efalizumab/Efalizumab_Bauer1999_reference.md) | — | 1-compartment (no model) | 0 | Bauer RJ et al., Population pharmacokinetics and pharmac…, Journal of pharmacokinetics… (1999) | [10.1023/a:1020917122093](https://doi.org/10.1023/a:1020917122093) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sun_2005_reference](drugs/drug_efalizumab/Efalizumab_Sun2005_reference.md) | — | 1-compartment (no model) | 0 | Sun YN et al., Population pharmacokinetics of efalizum…, Journal of clinical pharmac… (2005) | [10.1177/0091270004272731](https://doi.org/10.1177/0091270004272731) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ng_2005_CD11a](drugs/drug_efalizumab/pd_Ng_2005_CD11a.md) | percent of predose CD11a ← efalizumab · target-mediated drug disposition | — | Ng CM et al., Pharmacokinetic-pharmacodynamic-efficac…, Pharmaceutical research (2005) | [10.1007/s11095-005-5642-4](https://doi.org/10.1007/s11095-005-5642-4) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ng_2005_PASI](drugs/drug_efalizumab/pd_Ng_2005_PASI.md) | psoriasis area and severity index ← CD11a · indirect response — drug inhibits the production of psoriasis area and severity index | — | Ng CM et al., Pharmacokinetic-pharmacodynamic-efficac…, Pharmaceutical research (2005) | [10.1007/s11095-005-5642-4](https://doi.org/10.1007/s11095-005-5642-4) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=efalizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ITGAL (antibody), ITGAX (antibody).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bauer_1999.pdf` | Bauer RJ et al., Population pharmacokinetics and pharmac…, Journal of pharmacokinetics… (1999) | popPK | 10 | [10.1023/a:1020917122093](https://doi.org/10.1023/a:1020917122093) | [10826130](https://pubmed.ncbi.nlm.nih.gov/10826130) | The study reports population PK parameters (clearance) and a mechanistic model for hu1124 (efalizumab) in humans, though specific volume of distribution values are not explicitly listed in the abstract text provided. |
| `Sun_2005.pdf` | Sun YN et al., Population pharmacokinetics of efalizum…, Journal of clinical pharmac… (2005) | popPK | 10 | [10.1177/0091270004272731](https://doi.org/10.1177/0091270004272731) | [15778428](https://pubmed.ncbi.nlm.nih.gov/15778428) | The paper is a population pharmacokinetic study of efalizumab in humans, and the abstract explicitly provides numeric values for V/F, Ka, CL/F, and variability. |
| `Ng_2005.pdf` | Ng CM et al., Pharmacokinetic-pharmacodynamic-efficac…, Pharmaceutical research (2005) | popPK | 9 | [10.1007/s11095-005-5642-4](https://doi.org/10.1007/s11095-005-5642-4) | [16028009](https://pubmed.ncbi.nlm.nih.gov/16028009) | The paper describes a population PK/PD/E modeling analysis for efalizumab in humans, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided evidence. |
| `Lim_2015.pdf` | Lim RK et al., Targeted Delivery of LXR Agonist Using…, Bioconjugate chemistry (2015) | pd | 4 | [10.1021/acs.bioconjchem.5b00203](https://doi.org/10.1021/acs.bioconjchem.5b00203) | [25945727](https://www.ncbi.nlm.nih.gov/pubmed/25945727) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-14T22:00:56.721233+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Lembo_2014 | not_relevant | 1 | 2 | The paper investigates MCP-1 polymorphisms in psoriasis patients treated with various biologics (including efalizumab) but does not report pharmacokinetic or pharmacodynamic parameters of efalizumab influenced by these genetic variants. |
| popPK | Lim_2015 | irrelevant | 0 | 0 | no_text gate: only 78 chars of text extracted (&lt; 400) |
| popPK | Ng_2005 | relevant | 9 | 2 | The paper describes a population PK/PD/E modeling analysis for efalizumab in humans, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided evidence. |
| popPK | Wu_2006 | irrelevant | 0 | 0 | The study investigates the PK/PD of a surrogate antibody (muM17) in mice, not efalizumab itself, and contains no quantitative PK parameter values for efalizumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 22:00 UTC</sub>

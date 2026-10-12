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
| 2026-10-06 23:56 | 0:46 | 0/1/0 | 1/0/0 | 0/0/0 | 17,250/2,155 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sun_2005_reference](drugs/drug_efalizumab/Efalizumab_Sun2005_reference.md) | — | 1-compartment (no model) | 0 | Sun YN et al., Population pharmacokinetics of efalizum…, Journal of clinical pharmac… (2005) | [10.1177/0091270004272731](https://doi.org/10.1177/0091270004272731) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ng_2005_percent_of_predose_CD11a](drugs/drug_efalizumab/pd_Ng_2005_percent_of_predose_CD11a.md) | percent of predose CD11a ← efalizumab · target-mediated drug disposition | — | Ng CM et al., Pharmacokinetic-pharmacodynamic-efficac…, Pharmaceutical research (2005) | [10.1007/s11095-005-5642-4](https://doi.org/10.1007/s11095-005-5642-4) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bauer_1999.pdf` | Bauer RJ et al., Population pharmacokinetics and pharmac…, Journal of pharmacokinetics… (1999) | popPK | 10 | [10.1023/a:1020917122093](https://doi.org/10.1023/a:1020917122093) | [10826130](https://pubmed.ncbi.nlm.nih.gov/10826130) | Reports population pharmacokinetics and clearance parameters for hu1124 (efalizumab) in humans, though specific volume of distribution values are not explicitly stated in the text. |
| `Ng_2005.pdf` | Ng CM et al., Pharmacokinetic-pharmacodynamic-efficac…, Pharmaceutical research (2005) | popPK | 10 | [10.1007/s11095-005-5642-4](https://doi.org/10.1007/s11095-005-5642-4) | [16028009](https://pubmed.ncbi.nlm.nih.gov/16028009) | The paper reports a population PK/PD model for efalizumab with parameters estimated in human patients, but the specific numeric parameter values are not explicitly listed in the provided abstract or evidence text. |
| `Sun_2005.pdf` | Sun YN et al., Population pharmacokinetics of efalizum…, Journal of clinical pharmac… (2005) | popPK | 10 | [10.1177/0091270004272731](https://doi.org/10.1177/0091270004272731) | [15778428](https://pubmed.ncbi.nlm.nih.gov/15778428) | The paper reports quantitative population PK parameters (V/F, Ka, CL/F) for efalizumab in humans directly in the evidence. |
| `Lim_2015.pdf` | Lim RK et al., Targeted Delivery of LXR Agonist Using…, Bioconjugate chemistry (2015) | pd | 4 | [10.1021/acs.bioconjchem.5b00203](https://doi.org/10.1021/acs.bioconjchem.5b00203) | [25945727](https://www.ncbi.nlm.nih.gov/pubmed/25945727) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T23:56:43.214104+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Chiu_2012 | not_relevant | 1 | 0 | The paper reports associations between HLA alleles and clinical response (biomarker/therapeutic efficacy) rather than specific pharmacokinetic or pharmacodynamic parameter changes. |
| PGx | Lembo_2014 | not_relevant | 0 | 0 | The paper examines MCP-1 levels as a marker of disease severity and treatment response in psoriasis, but does not report pharmacogenomic effects on the pharmacokinetic or pharmacodynamic parameters of efalizumab. |
| popPK | Lim_2015 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro efficacy of an LXR agonist antibody-drug conjugate and does not contain pharmacokinetic data for efalizumab. |
| popPK | Ng_2005 | relevant | 10 | 2 | The paper reports a population PK/PD model for efalizumab with parameters estimated in human patients, but the specific numeric parameter values are not explicitly listed in the provided abstract or evidence text. |
| popPK | Wu_2006 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of muM17, a surrogate mouse monoclonal antibody, rather than efalizumab itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:56 UTC</sub>

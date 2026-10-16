<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;panitumumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Panitumumab_Liao2021_reference&quot;,&quot;label&quot;:&quot;Liao_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_panitumumab/Panitumumab_Liao2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# panitumumab

- **generic name:** panitumumab
- **ATC codes:** `L01FE02`, `L01XC08`
- **DrugBank:** [DB01269](https://go.drugbank.com/drugs/DB01269) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Panitumumab is a monoclonal antibody that blocks EGFR and is used to treat colorectal cancers, including colon and rectal cancer. It is authorised in the European Union for colorectal cancer and is an approved drug, though it also remains under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417775](https://www.wikidata.org/wiki/Q417775) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 00:51 | 1:40 | 0/3/1 | 0/0/0 | 0/0/0 | 121,943/11,621 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: T1_cmax</sub><br><sub>route_to: `scholar`</sub> | [Liao_2021_reference](drugs/drug_panitumumab/Panitumumab_Liao2021_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Liao MZ et al., The impact of hepatic and renal functio…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-021-04319-w](https://doi.org/10.1007/s00280-021-04319-w) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Liao_2020_reference](drugs/drug_panitumumab/Panitumumab_Liao2020_reference.md) | — | 1-compartment (no model) | 0 | Liao MZ et al., Dose Regimen Rationale for Panitumumab…, Clinical pharmacology : adv… (2020) | [10.2147/CPAA.S262949](https://doi.org/10.2147/CPAA.S262949) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Lobet_2026_reference](drugs/drug_panitumumab/Panitumumab_Lobet2026_reference.md) | — | 2-compartment (no model) | 6 | Lobet S et al., Analysis of the relationship between bo…, Biomedicine & pharmacothera… (2026) | [10.1016/j.biopha.2026.119242](https://doi.org/10.1016/j.biopha.2026.119242) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.308). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Ma_2009_reference](drugs/drug_panitumumab/Panitumumab_Ma2009_reference.md) | — | 2-compartment (no model) | 4 | Ma P et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (2009) | [10.1177/0091270009344989](https://doi.org/10.1177/0091270009344989) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=panitumumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: EGFR (suppressor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ma_2009.pdf` | Ma P et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (2009) | popPK | 10 | [10.1177/0091270009344989](https://doi.org/10.1177/0091270009344989) | [19723673](https://pubmed.ncbi.nlm.nih.gov/19723673) | The paper reports specific quantitative population PK parameters (CL, V1, V2, Km, Vmax/Km) for panitumumab in the provided text. |

<sub>queue written 2026-10-15T00:49:59.814267+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baaz_2023 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic modeling of tumor growth and progression-free survival, explicitly stating that no individual PK data were available and driving the model with total dose rather than estimating PK parameters. |
| popPK | Koukakis_2016 | irrelevant | 0 | 0 | The study analyzes the impact of skin toxicity on quality of life (QoL) and does not report any pharmacokinetic parameters (such as clearance or volume of distribution) for panitumumab. |
| popPK | Lee_2026 | irrelevant | 0 | 0 | The paper describes the engineering and efficacy of NK cell engagers using panitumumab as a component, but does not report pharmacokinetic parameters for panitumumab itself. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The paper is a methodological statistics study focusing on biomarker effects and does not report any pharmacokinetic parameters for panitumumab. |
| popPK | Modest_2025 | irrelevant | 0 | 0 | The paper reports patient-reported outcomes (quality of life) for a cancer trial where panitumumab is a co-administered agent, with no pharmacokinetic data reported. |
| popPK | Patel_2010 | irrelevant | 0 | 0 | The study focuses on in vitro antibody-dependent cellular cytotoxicity (ADCC) and binding affinity, not pharmacokinetic disposition parameters. |
| popPK | Weeraratne_2011 | irrelevant | 2 | 0 | The study focuses on immunogenicity and uses a PopPK model only to compare antibody-positive vs negative patients, but it does not report the specific numeric PK parameter values (CL, V, etc.). |
| popPK | Yang_2010 | irrelevant | 3 | 0 | This is a qualitative review of panitumumab PK without reporting specific quantitative disposition parameters (CL, V, t1/2 values) or model estimates in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 00:50 UTC</sub>

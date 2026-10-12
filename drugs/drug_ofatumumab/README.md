<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;ofatumumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ofatumumab_Struemper2014_reference&quot;,&quot;label&quot;:&quot;Struemper_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ofatumumab/Ofatumumab_Struemper2014_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ofatumumab

- **generic name:** ofatumumab
- **ATC codes:** `L01FA02`, `L01XC10`, `L04AA52`, `L04AG12`
- **DrugBank:** [DB06650](https://go.drugbank.com/drugs/DB06650) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Ofatumumab is a monoclonal antibody used to treat B-cell blood cancers such as chronic lymphocytic leukemia and lymphoma, and is also used for relapsing-remitting multiple sclerosis. It is authorised in the European Union, where one product remains on the market while another has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410656](https://www.wikidata.org/wiki/Q410656) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:56 | 20:57 | 1/2/0 | 0/0/0 | 0/0/0 | 302,915/58,158 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/2 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25), gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed 0/2</span> | [Struemper_2014_reference](drugs/drug_ofatumumab/Ofatumumab_Struemper2014_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Struemper H et al., Population pharmacokinetics of ofatumum…, Journal of clinical pharmac… (2014) | [10.1002/jcph.268](https://doi.org/10.1002/jcph.268) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Coiffier_2010_reference](drugs/drug_ofatumumab/Ofatumumab_Coiffier2010_reference.md) | — | 1-compartment (no model) | 2 | Coiffier B et al., Pharmacokinetics and pharmacokinetic/ph…, British journal of haematol… (2010) | [10.1111/j.1365-2141.2010.08193.x](https://doi.org/10.1111/j.1365-2141.2010.08193.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.913), gpt-oss:120b (not confirmed, agreement 0.783). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Yu_2022_reference](drugs/drug_ofatumumab/Ofatumumab_Yu2022_reference.md) | — | 2-compartment (no model) | 10 | Yu H et al., Population Pharmacokinetic-B Cell Model…, CNS drugs (2022) | [10.1007/s40263-021-00895-w](https://doi.org/10.1007/s40263-021-00895-w) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ofatumumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: MS4A1 (antibody), MS4A1 (regulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Struemper_2014.pdf` | Struemper H et al., Population pharmacokinetics of ofatumum…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.268](https://doi.org/10.1002/jcph.268) | [24443277](https://pubmed.ncbi.nlm.nih.gov/24443277) | The paper reports a population PK model for ofatumumab with specific numeric values for linear clearance (7.5 mL/h) and volume of distribution (5.3 L) provided in the text. |

<sub>queue written 2026-10-07T18:36:39.727562+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Colucci_2023 | irrelevant | 0 | 0 | The study is a clinical observational analysis of relapse risk and B-cell recovery markers, not a pharmacokinetic study reporting quantitative disposition parameters for ofatumumab. |
| popPK | Greco_2026 | irrelevant | 0 | 0 | The study reports optical coherence tomography (OCT) retinal thickness data, not pharmacokinetic parameters. |
| popPK | Huck_2019 | irrelevant | 0 | 0 | The study investigates a mouse anti-CD20 antibody in mice, not the human drug ofatumumab, and reports immunological effects rather than pharmacokinetic parameters. |
| popPK | Yuan_2026 | irrelevant | 0 | 0 | The paper is a narrative review discussing the development roadmap and biological rationale for B-cell targeting therapies, including ofatumumab, but it does not report original quantitative pharmacokinetic parameter values. |
| popPK | Zanghì_2026 | irrelevant | 0 | 0 | The study is a longitudinal observational analysis of cognitive and structural brain changes in multiple sclerosis patients, reporting no pharmacokinetic parameters for ofatumumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:37 UTC</sub>

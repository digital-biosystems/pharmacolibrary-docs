<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Naphthoquine&quot;}]"></div>

# Naphthoquine

- **generic name:** Naphthoquine
- **ATC codes:** `P01BF08`
- **DrugBank:** [DB16249](https://go.drugbank.com/drugs/DB16249) · **PubChem:** none
- **molar mass:** 409.96 g/mol (C24H28ClN3O) — DrugBank
- **groups:** investigational

## About

Naphthoquine is an antimalarial drug used in combination with artemisinin derivatives to treat malaria. It is considered investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27290230](https://www.wikidata.org/wiki/Q27290230) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Ali_2022_reference](drugs/drug_naphthoquine/Naphthoquine_Ali2022_reference.md) | — | — (no model) | 0 | Ali AM et al., Population Pharmacokinetics of Antimala…, Antimicrobial agents and ch… (2022) | [10.1128/aac.01696-21](https://doi.org/10.1128/aac.01696-21) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27 — no SI value to build from</sub> | [Batty_2012_reference](drugs/drug_naphthoquine/Naphthoquine_Batty2012_reference.md) | — | — (no model) | 0 | Batty KT et al., Artemisinin-naphthoquine combination th…, Antimicrobial agents and ch… (2012) | [10.1128/AAC.06250-11](https://doi.org/10.1128/AAC.06250-11) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:34 | 0:51 | 2/0/0 | 0/0/0 | 0/0/0 | 40,701/2,884 | ollama / glm-5.3-flash | 2 | 0/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Batty_2012.pdf` | Batty KT et al., Artemisinin-naphthoquine combination th…, Antimicrobial agents and ch… (2012) | popPK | 10 | [10.1128/AAC.06250-11](https://doi.org/10.1128/AAC.06250-11) | [22330923](https://pubmed.ncbi.nlm.nih.gov/22330923) | Population PK model for naphthoquine with numeric CL/F, Vss/F, half-lives reported directly in the abstract. |

<sub>queue written 2026-10-07 07:34 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Karl_2016 | irrelevant | 0 | 0 | This is a gametocyte carriage risk-factor study; naphthoquine is only a treatment arm with no PK parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnaphthoquine%5D&body=Drug%3A%20naphthoquine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_naphthoquine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 07:34 UTC</sub>

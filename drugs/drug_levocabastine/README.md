<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01A&quot;,&quot;href&quot;:&quot;atc/R01A.md&quot;},{&quot;label&quot;:&quot;levocabastine&quot;}]"></div>

# levocabastine

- **generic name:** levocabastine
- **ATC codes:** `R01AC02`, `S01GX02`
- **DrugBank:** [DB01106](https://go.drugbank.com/drugs/DB01106) · **PubChem:** [CID 54385](https://pubchem.ncbi.nlm.nih.gov/compound/54385)
- **molar mass:** 420.528 g/mol (C26H29FN2O2) — DrugBank
- **groups:** approved

## About

Levocabastine is a non-sedating antihistamine used to treat allergic eye and nasal conditions, including giant papillary conjunctivitis. It is an approved medicine, given as eye drops or a nasal spray for topical antiallergic treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2240116](https://www.wikidata.org/wiki/Q2240116) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sharif_1996_3H_IPs_Ca2_i](drugs/drug_levocabastine/pd_Sharif_1996_3H_IPs_Ca2_i.md) | Histamine-induced inositol phosphates generation / intracellular calcium mobilization (antagonized by levocabastine) ← levocabastine · direct Emax (saturable) effect | — | Sharif NA et al., Human conjunctival epithelial cells exp…, Experimental eye research (1996) | [10.1006/exer.1996.0105](https://doi.org/10.1006/exer.1996.0105) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:09 | 0:26 | 0/0/0 | 1/0/0 | 0/0/0 | 15,238/760 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Croci_1999.pdf` | Croci T et al., In vitro functional evidence of differe…, British journal of pharmaco… (1999) | pd | 4 | [10.1038/sj.bjp.0702734](https://doi.org/10.1038/sj.bjp.0702734) | [10482925](https://www.ncbi.nlm.nih.gov/pubmed/10482925) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T13:09:02.103765+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Belmeguenai_2000 | irrelevant | 0 | 0 | Levocabastine is only used as an nts2 receptor ligand in an electrophysiology study; no PK parameters reported. |
| popPK | Croci_1999 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| popPK | Desager_1995 | irrelevant | 3 | 1 | This is a review of PK-PD relationships for antihistamines; levocabastine is only mentioned as having a nonlinear relationship, with no numeric disposition parameters present in the evidence. |
| popPK | Sharif_1996 | irrelevant | 0 | 0 | In-vitro receptor pharmacology study; levocabastine is only an antagonist probe with an IC50, no PK disposition parameters. |
| popPK | Tóth_2016 | irrelevant | 0 | 0 | This is a receptor binding study of neuromedin N; levocabastine appears only as an NTS2 antagonist tool, with no PK parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>

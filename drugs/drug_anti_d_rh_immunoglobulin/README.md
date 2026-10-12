<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;anti-D (rh) immunoglobulin&quot;}]"></div>

# anti-D (rh) immunoglobulin

- **generic name:** anti-D (rh) immunoglobulin
- **ATC codes:** `J06BB01`
- **DrugBank:** [DB11597](https://go.drugbank.com/drugs/DB11597) · **PubChem:** not captured
- **groups:** approved

## About

Anti-D immunoglobulin is a human antibody product used to prevent sensitisation to the RhD blood group, mainly in RhD-negative mothers during pregnancy and after delivery. It is an approved medicine, widely used in maternal care, and classified as a specific immunoglobulin for systemic use.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:58 | 0:31 | 0/0/0 | 0/0/0 | 0/0/0 | 10,954/875 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=anti_d_rh_immunoglobulin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: RHD (antibody).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chapman_1996.pdf` | Chapman GE, A pharmacokinetic/pharmacodynamic model…, Transfusion medicine (Oxfor… (1996) | popPK | 7 | [10.1111/j.1365-3148.1996.tb00073.x](https://doi.org/10.1111/j.1365-3148.1996.tb00073.x) | [8885152](https://pubmed.ncbi.nlm.nih.gov/8885152) | A PK/PD model of anti-D immunoglobulin disposition (IM/IV redistribution, compartments) is presented, but no numeric parameter values appear in the evidence; constants derive from prior published data. |

<sub>queue written 2026-10-07T15:58:21.631472+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Barrett_1999 | not_relevant | 1 | 5 | Anti-D immunoglobulin is only the infection vehicle; HLA-DRB1*01 is associated with viral clearance outcome, not with any PK/PD parameter of the drug. |
| PGx | Barrett_2001 | not_relevant | 0 | 0 | Anti-D immunoglobulin is only the infection source; no pharmacogenomic effect on its PK/PD is reported. |
| popPK | Chapman_1996 | relevant | 7 | 2 | A PK/PD model of anti-D immunoglobulin disposition (IM/IV redistribution, compartments) is presented, but no numeric parameter values appear in the evidence; constants derive from prior published data. |
| PGx | Fanning_2000 | not_relevant | 2 | 3 | HLA alleles associate with viral clearance, not with PK/PD parameters of anti-D immunoglobulin itself. |
| PGx | Fanning_2002 | not_relevant | 0 | 0 | Paper discusses HCV disease progression and HLA associations, with no pharmacogenomic effect on anti-D immunoglobulin PK/PD parameters. |
| PGx | Fu_2024 | not_relevant | 3 | 2 | Discusses DEL genotype implications for anti-D-Ig prophylaxis need, but reports no quantitative PK/PD parameter changes by genotype. |
| PGx | Grellier_1997 | not_relevant | 0 | 0 | Paper studies anti-E2 antibodies as a marker of HCV clearance, not a gene variant effect on PK/PD of anti-D immunoglobulin. |
| PGx | Maas_1983 | not_relevant | 0 | 0 | No pharmacogenomic variant/genotype effect on anti-D immunoglobulin PK/PD parameters is reported; only route, spleen status, and D-variant sensitization discussed. |
| PGx | Nattermann_2011 | not_relevant | 1 | 5 | Genetic variants predict spontaneous HCV clearance (host disease outcome), not any PK/PD parameter of anti-D immunoglobulin itself. |
| popPK | Starcević_2011 | irrelevant | 0 | 0 | A clinical case report on HDFN management with no PK parameters for anti-D immunoglobulin. |
| PGx | Zibert_1997 | not_relevant | 0 | 0 | Study of anti-HVR1 antibody responses in HCV infection, not a pharmacogenomic effect on PK/PD parameters of anti-D immunoglobulin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>

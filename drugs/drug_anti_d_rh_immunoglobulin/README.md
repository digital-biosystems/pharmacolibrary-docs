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

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=anti_d_rh_immunoglobulin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: RHD (antibody).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

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

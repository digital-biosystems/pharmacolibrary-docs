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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:09 | 0:26 | 0/0/0 | 1/0/0 | 0/0/0 | 15,238/760 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sharif_1996_3H_IPs_Ca2_i](drugs/drug_levocabastine/pd_Sharif_1996_3H_IPs_Ca2_i.md) | Histamine-induced inositol phosphates generation / intracellular calcium mobilization (antagonized by levocabastine) ← levocabastine · direct Emax (saturable) effect | — | Sharif NA et al., Human conjunctival epithelial cells exp…, Experimental eye research (1996) | [10.1006/exer.1996.0105](https://doi.org/10.1006/exer.1996.0105) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=levocabastine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HRH1 (target), NTSR2 (partial antagonist).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

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

---
<sub>Generated by `docs.py` (scholarv2)</sub>

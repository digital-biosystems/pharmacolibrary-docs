<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;iopromide&quot;}]"></div>

# iopromide

- **generic name:** iopromide
- **ATC codes:** `V08AB05`
- **DrugBank:** [DB09156](https://go.drugbank.com/drugs/DB09156) · **PubChem:** [CID 3736](https://pubchem.ncbi.nlm.nih.gov/compound/3736)
- **molar mass:** 791.1119 g/mol (C18H24I3N3O8) — DrugBank
- **groups:** approved

## About

Iopromide is an iodinated X-ray contrast agent used to make body structures visible during imaging examinations. It is an approved, low-osmolar water-soluble contrast medium used in medical imaging practice.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4202805](https://www.wikidata.org/wiki/Q4202805) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| iopromide | parent | 791.112 | C18H24I3N3O8 | DrugBank | [3736](https://pubchem.ncbi.nlm.nih.gov/compound/3736) | Hackstein_2002 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:07 | 9:05 | 0/1/0 | 0/0/0 | 0/0/0 | 97,714/1,981 | ollama / glm-5.3-flash | 5 | 0/0 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hackstein_2002_reference](drugs/drug_iopromide/Iopromide_Hackstein2002_reference.md) | — | 1-compartment (no model) | 3 | Hackstein N et al., Lopromide one-sample clearance as a mea…, Clinical physiology and fun… (2002) | [10.1046/j.1365-2281.2002.00394.x](https://doi.org/10.1046/j.1365-2281.2002.00394.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=iopromide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 33 matched, 33 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hackstein_2002.pdf` | Hackstein N et al., Lopromide one-sample clearance as a mea…, Clinical physiology and fun… (2002) | popPK | 8 | [10.1046/j.1365-2281.2002.00394.x](https://doi.org/10.1046/j.1365-2281.2002.00394.x) | [12005162](https://pubmed.ncbi.nlm.nih.gov/12005162) | Reports iopromide two-compartment PK in 62 patients with numeric Vd (0.242 L/kg) and clearance estimation error, though full CL values are partly implicit. |
| `Kugoev_1999.pdf` | Kugoev AI et al., Pharmacokinetics and tolerability of io…, Investigative radiology (1999) | popPK | 8 | [10.1097/00004424-199911000-00005](https://doi.org/10.1097/00004424-199911000-00005) | [10548381](https://pubmed.ncbi.nlm.nih.gov/10548381) | Human intrathecal iopromide PK study with numeric half-lives (14.9 h mean, 17.3 h one-compartment), lag time, and urine recovery reported directly in the abstract; no CL/V values given. |

<sub>queue written 2026-10-07T23:00:28.851660+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gaspari_1995 | irrelevant | 2 | 1 | The study's subject drug is iohexol; iopromide appears only as a comparator in a subgroup, and no numeric PK parameter values are present in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 23:00 UTC</sub>

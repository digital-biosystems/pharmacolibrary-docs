<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;dexibuprofen&quot;}]"></div>

# dexibuprofen

- **generic name:** dexibuprofen
- **ATC codes:** `M01AE14`
- **DrugBank:** [DB09213](https://go.drugbank.com/drugs/DB09213) · **PubChem:** [CID 39912](https://pubchem.ncbi.nlm.nih.gov/compound/39912)
- **molar mass:** 206.2808 g/mol (C13H18O2) — DrugBank
- **groups:** approved, withdrawn

## About

It has been approved in some countries but appears to have been withdrawn from the market in others, so it is not widely available today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420051](https://www.wikidata.org/wiki/Q420051) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:45 | 0:04 | 0/0/0 | 0/0/0 | 0/0/0 | 15,749/382 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dexibuprofen) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` unknown, `SLCO1A2` unknown | DrugBank actor |
| absorption | kidney | `ABCB1` unknown | DrugBank actor |
| absorption | liver | `ABCB1` unknown, `SLCO2B1` unknown | DrugBank actor |
| absorption | placenta | `ABCB1` unknown | DrugBank actor |
| absorption | small intestine | `ABCB1` unknown, `SLC15A1` unknown, `SLCO1A2` unknown, `SLCO2B1` unknown | DrugBank actor |
| absorption | testis | `ABCB1` unknown | DrugBank actor |
| distribution | blood | `ALB` unknown | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` unknown | DrugBank actor |
| distribution | lung | `ABCC1` unknown | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `UGT1A1` substrate, `UGT1A3` substrate, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | kidney | `ABCC4` unknown, `SLC22A6` unknown, `SLC22A8` unknown | DrugBank actor |
| excretion | liver | `ABCC4` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: AMACR (substrate), BCL2 (negative modulator), CFTR (inhibitor), FABP2 (binder), GP1BA (unknown), PLAT (modulator), PPARA (unknown), PPARG (activator), PTGS1 (inhibitor), PTGS2 (inhibitor), S100A7 (unknown), SLC22A11 (unknown), THBD (modulator), UGT2B4 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Menon_2008.pdf` | Menon S et al., A randomized, crossover study to determ…, International journal of cl… (2008) | popPK | 7 | [10.5414/cpp46048](https://doi.org/10.5414/cpp46048) | [18218298](https://pubmed.ncbi.nlm.nih.gov/18218298) | Study reports non-compartmental PK parameters (Cmax, AUC, Tmax) for dexibuprofen in humans, but lacks specific disposition parameters like CL/F or half-life. |

<sub>queue written 2026-10-07T00:45:17.362953+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Muralidharan_2012 | relevant | 7 | 2 | The study is a bioavailability/PK study of dexibuprofen in humans, but specific numeric parameter values (CL, V, etc.) are not present in the provided text, only references to tables and general parameter names. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>

<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;solifenacin&quot;}]"></div>

# solifenacin

- **generic name:** solifenacin
- **ATC codes:** `G04BD08`, `G04CA53`
- **DrugBank:** [DB01591](https://go.drugbank.com/drugs/DB01591) · **PubChem:** [CID 154059](https://pubchem.ncbi.nlm.nih.gov/compound/154059)
- **molar mass:** 362.473 g/mol (C23H26N2O2) — DrugBank
- **groups:** approved, investigational

## About

Solifenacin is a urological medicine used to treat urinary frequency and incontinence, such as in overactive bladder. It is an approved drug and is widely used for this condition.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q59575279](https://www.wikidata.org/wiki/Q59575279) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| solifenacin | parent | 362.473 | C23H26N2O2 | DrugBank | [154059](https://pubchem.ncbi.nlm.nih.gov/compound/154059) | Tannenbaum_2020 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:10 | 1:01 | 0/1/0 | 1/0/0 | 0/0/0 | 80,410/4,925 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Tannenbaum_2020_reference](drugs/drug_solifenacin/Solifenacin_Tannenbaum2020_reference.md) | — | 2-compartment (no model) | 12 | Tannenbaum S et al., Pharmacokinetics of solifenacin in pedi…, Pharmacology research & per… (2020) | [10.1002/prp2.684](https://doi.org/10.1002/prp2.684) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Cho_2021_IK_M](drugs/drug_solifenacin/pd_Cho_2021_IK_M.md) | M-Type K+ Current ← Solifenacin · direct Emax (saturable) effect | — | Cho HY et al., The Effectiveness in Activating M-Type K, International journal of mo… (2021) | [10.3390/ijms222212399](https://doi.org/10.3390/ijms222212399) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=solifenacin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Strougo_2011.pdf` | Strougo A et al., A semiphysiological population model fo…, Drug metabolism and disposi… (2011) | popPK | 9 | [10.1124/dmd.110.037838](https://doi.org/10.1124/dmd.110.037838) | [21487054](https://pubmed.ncbi.nlm.nih.gov/21487054) | The paper describes a population PK model for solifenacin, but the extracted evidence contains only the abstract and lacks specific numeric parameter values (CL, V, etc.). |

<sub>queue written 2026-10-07T09:09:49.067926+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cho_2021 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study investigating the effect of solifenacin on M-type potassium channel currents in cell lines, not a pharmacokinetic study. |
| popPK | Strougo_2011 | relevant | 9 | 2 | The paper describes a population PK model for solifenacin, but the extracted evidence contains only the abstract and lacks specific numeric parameter values (CL, V, etc.). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:09 UTC</sub>

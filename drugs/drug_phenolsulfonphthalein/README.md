<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;phenolsulfonphthalein&quot;}]"></div>

# phenolsulfonphthalein

- **generic name:** phenolsulfonphthalein
- **ATC codes:** `V04CH03`
- **DrugBank:** [DB13212](https://go.drugbank.com/drugs/DB13212) · **PubChem:** not captured
- **molar mass:** 354.38 g/mol (C19H14O5S) — DrugBank
- **groups:** experimental

## About

Phenolsulfonphthalein is a diagnostic agent used in tests of kidney function and for detecting ureteral injuries. It is classed as an experimental diagnostic substance and is not an established marketed medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418719](https://www.wikidata.org/wiki/Q418719) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| phenolsulfonphthalein | parent | 354.38 | C19H14O5S | DrugBank | — | Hinchcliff_1987, Nishida_2003 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:20 | 0:59 | 0/1/1 | 0/0/0 | 0/0/0 | 46,365/2,413 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Hinchcliff_1987_reference](drugs/drug_phenolsulfonphthalein/Phenolsulfonphthalein_Hinchcliff1987_reference.md) | — | 1-compartment (no model) | 3 | Hinchcliff KW et al., Pharmacokinetics of phenolsulfonphthale…, American journal of veterin… (1987) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Nishida_2003_reference](drugs/drug_phenolsulfonphthalein/Phenolsulfonphthalein_Nishida2003_reference.md) | — | 1-compartment (no model) | 7 | Nishida K et al., Influence of liver disease on phenolsul…, Biological & pharmaceutical… (2003) | [10.1248/bpb.26.988](https://doi.org/10.1248/bpb.26.988) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hinchcliff_1987.pdf` | Hinchcliff KW et al., Pharmacokinetics of phenolsulfonphthale…, American journal of veterin… (1987) | popPK | 10 | not captured | [3631717](https://pubmed.ncbi.nlm.nih.gov/3631717) | Original PK study of PSP in horses/ponies with numeric CL, Vss, and half-life values reported directly in the abstract. |
| `Nishida_2004.pdf` | Nishida K et al., Absorption characteristics of compounds…, European journal of pharmac… (2004) | popPK | 7 | [10.1016/j.ejpb.2004.04.016](https://doi.org/10.1016/j.ejpb.2004.04.016) | [15451548](https://pubmed.ncbi.nlm.nih.gov/15451548) | Reports numeric ka (0.0137 min−1) and absorption ratios for PSP from rat kidney surface with a two-compartment first-order absorption model, though it is an absorption study rather than full disposition characterization. |
| `Honjo_2014.pdf` | Honjo H et al., Effect of selective cyclooxygenase-2 in…, Drug metabolism and drug in… (2014) | popPK | 6 | [10.1515/dmdi-2014-0008](https://doi.org/10.1515/dmdi-2014-0008) | [24870608](https://pubmed.ncbi.nlm.nih.gov/24870608) | PSP is the subject drug with a two-compartment PK analysis in rats, but numeric parameter values (CL, V, etc.) are not shown in the evidence, only percentages of urinary recovery. |

<sub>queue written 2026-10-07T21:19:44.383909+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Honjo_2014 | relevant | 6 | 3 | PSP is the subject drug with a two-compartment PK analysis in rats, but numeric parameter values (CL, V, etc.) are not shown in the evidence, only percentages of urinary recovery. |
| popPK | Kym_1996 | irrelevant | 0 | 0 | This is an in-vitro bioassay study of impurities in phenol red, not a pharmacokinetic study of phenolsulfonphthalein; no PK parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:19 UTC</sub>

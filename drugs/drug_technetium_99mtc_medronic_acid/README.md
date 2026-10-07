<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09B&quot;,&quot;href&quot;:&quot;atc/V09B.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) medronic acid&quot;}]"></div>

# technetium (99mTc) medronic acid

- **generic name:** technetium (99mTc) medronic acid
- **ATC codes:** `V09BA02`
- **DrugBank:** [DB09138](https://go.drugbank.com/drugs/DB09138) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Technetium (99mTc) medronic acid is a radiopharmaceutical used as a diagnostic imaging agent for the skeleton. It is an approved diagnostic radiopharmaceutical, widely used in nuclear medicine for bone scans.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7692228](https://www.wikidata.org/wiki/Q7692228) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:57 | 1:36 | 0/0/0 | 0/0/0 | 0/0/0 | 16,317/3,883 | openai / gpt-6-luna | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=technetium_99mtc_medronic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dulin_2012.pdf` | Dulin JA et al., Influence of exercise on the distributi…, American journal of veterin… (2012) | popPK | 9 | [10.2460/ajvr.73.3.418](https://doi.org/10.2460/ajvr.73.3.418) | [22369536](https://pubmed.ncbi.nlm.nih.gov/22369536) | The study models technetium Tc 99m medronate pharmacokinetics in horses, but numeric disposition parameters are not provided. |
| `Gnanasegaran_2007.pdf` | Gnanasegaran G et al., Atypical Paget's disease with quantitat…, Clinical nuclear medicine (2007) | popPK | 8 | [10.1097/RLU.0b013e318148b1dd](https://doi.org/10.1097/RLU.0b013e318148b1dd) | [17885354](https://pubmed.ncbi.nlm.nih.gov/17885354) | The study assesses Tc-99m MDP tracer clearance, but no numeric parameter values are included in the evidence. |
| `Sagar_1979.pdf` | Sagar VV et al., Studies of skeletal tracer kinetics. II…, Journal of nuclear medicine… (1979) | popPK | 8 | not captured | [536792](https://pubmed.ncbi.nlm.nih.gov/536792) | Canine Tc-99m MDP uptake is studied using a seven-compartment model, but its numeric parameter values are not provided. |

<sub>queue written 2026-10-07T18:57:10.129657+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ashokan_2013 | irrelevant | 1 | 0 | This is an imaging-agent study, and nanoparticle clearance within 48 hours is not a quantitative pharmacokinetic parameter for technetium-99m-MDP. |
| popPK | Bar-Sever_2000 | irrelevant | 0 | 0 | Tc-99m MDP is used as a diagnostic tracer, with no quantitative pharmacokinetic disposition parameters reported. |
| popPK | Dulin_2012 | relevant | 9 | 1 | The study models technetium Tc 99m medronate pharmacokinetics in horses, but numeric disposition parameters are not provided. |
| popPK | Gnanasegaran_2007 | relevant | 8 | 0 | The study assesses Tc-99m MDP tracer clearance, but no numeric parameter values are included in the evidence. |
| popPK | Kasner_2003 | irrelevant | 0 | 0 | This reports imaging contamination cases, not quantitative pharmacokinetic disposition parameters. |
| popPK | Kumar_2007 | irrelevant | 1 | 0 | Rat biodistribution compares medronate with pamidronate but reports no quantitative PK parameter values. |
| popPK | Kung_1978 | irrelevant | 1 | 0 | MDP is only a comparator, and the numeric uptake data are not quantitative PK disposition parameters. |
| popPK | Littlefield_1983 | irrelevant | 1 | 0 | MDP is a diagnostic comparator and no numeric disposition parameter values are provided. |
| popPK | Rudd_1977 | irrelevant | 2 | 0 | The comparison reports qualitative clearance and excretion findings but no numeric disposition parameters. |
| popPK | Sagar_1979 | relevant | 8 | 1 | Canine Tc-99m MDP uptake is studied using a seven-compartment model, but its numeric parameter values are not provided. |
| popPK | Van_2010 | irrelevant | 0 | 0 | Technetium medronate is used for scintigraphic bone-turnover measurements, with no pharmacokinetic disposition parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>

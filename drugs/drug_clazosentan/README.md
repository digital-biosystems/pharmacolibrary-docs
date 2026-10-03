<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;clazosentan&quot;}]"></div>

# clazosentan

- **generic name:** clazosentan
- **ATC codes:** `C04AX33`
- **DrugBank:** [DB06677](https://go.drugbank.com/drugs/DB06677) · **PubChem:** not captured
- **molar mass:** 577.58 g/mol (C25H23N9O6S) — DrugBank
- **groups:** investigational

## About

**Indication.** Investigated for use/treatment in strokes.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| clazosentan | parent | 577.58 | C25H23N9O6S | DrugBank | — | van_2007 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 09:20 | 1:12 | 0/1/0 | 0/0/0 | 0/0/0 | 5,997/3,992 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 0/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [van_2007_reference](drugs/drug_clazosentan/Clazosentan_van2007_reference.md) | — | 1-compartment (no model) | 2 | van Giersbergen PL et al., Influence of ethnic origin and sex on t…, Journal of clinical pharmac… (2007) | [10.1177/0091270007307337](https://doi.org/10.1177/0091270007307337) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=clazosentan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: EDNRA (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Volz_2019.pdf` | Volz AK et al., Target-Mediated Population Pharmacokine…, Pharmaceutical research (2019) | popPK | 10 | [10.1007/s11095-019-2723-3](https://doi.org/10.1007/s11095-019-2723-3) | [31823033](https://pubmed.ncbi.nlm.nih.gov/31823033) | The paper describes a population PK model for clazosentan, but the specific numeric parameter values are not present in the provided evidence text. |
| `Bruderer_2011.pdf` | Bruderer S et al., Influence of different degrees of liver…, British journal of clinical… (2011) | popPK | 9 | [10.1111/j.1365-2125.2010.03804.x](https://doi.org/10.1111/j.1365-2125.2010.03804.x) | [21143501](https://pubmed.ncbi.nlm.nih.gov/21143501) | The study is a PK investigation of clazosentan in liver impairment, but the evidence only provides fold-changes in AUC and lacks specific numeric values for clearance, volume, or half-life. |
| `Bruderer_2011_2.pdf` | Bruderer S et al., Influence of severe renal impairment on…, Journal of clinical pharmac… (2011) | popPK | 9 | [10.1177/0091270010368975](https://doi.org/10.1177/0091270010368975) | [20926750](https://pubmed.ncbi.nlm.nih.gov/20926750) | The study is a PK investigation of clazosentan, but the evidence only provides relative percentage differences in AUC and steady-state concentrations, lacking specific numeric values for clearance, volume, or half-life. |
| `van_2007.pdf` | van Giersbergen PL et al., Influence of ethnic origin and sex on t…, Journal of clinical pharmac… (2007) | popPK | 9 | [10.1177/0091270007307337](https://doi.org/10.1177/0091270007307337) | [17906281](https://pubmed.ncbi.nlm.nih.gov/17906281) | The study reports a 3-compartment model and specific disposition half-lives (6 min, 21 min, 2.7 h) for clazosentan, but lacks explicit numeric values for clearance (CL) and volume (V) parameters in the provided text. |
| `Henrich_2021.pdf` | Henrich A et al., PK/PD modeling of a clazosentan thoroug…, Journal of pharmacokinetics… (2021) | popPK | 8 | [10.1007/s10928-020-09728-7](https://doi.org/10.1007/s10928-020-09728-7) | [33389549](https://pubmed.ncbi.nlm.nih.gov/33389549) | The paper describes a population PK/PD study for clazosentan using a two-compartment model, but no specific numeric parameter values (CL, V, etc.) are provided in the extracted evidence. |

<sub>queue written 2026-09-30T09:18:59.097572+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bruderer_2011 | relevant | 9 | 2 | The study is a PK investigation of clazosentan in liver impairment, but the evidence only provides fold-changes in AUC and lacks specific numeric values for clearance, volume, or half-life. |
| popPK | Bruderer_2011_2 | relevant | 9 | 2 | The study is a PK investigation of clazosentan, but the evidence only provides relative percentage differences in AUC and steady-state concentrations, lacking specific numeric values for clearance, volume, or half-life. |
| popPK | Henrich_2021 | relevant | 8 | 0 | The paper describes a population PK/PD study for clazosentan using a two-compartment model, but no specific numeric parameter values (CL, V, etc.) are provided in the extracted evidence. |
| PGx | Kaamini_2024 | not_relevant | 0 | 0 | The text is a letter to the editor advocating for personalized medicine and genetic screening but does not report specific pharmacogenomic data or effects on clazosentan PK/PD parameters. |
| popPK | Volz_2019 | relevant | 10 | 0 | The paper describes a population PK model for clazosentan, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Zisowsky_2014 | irrelevant | 0 | 0 | The paper reports pharmacodynamic parameters for AST (aspartate aminotransferase) levels, not pharmacokinetic parameters for clazosentan. |
| PD | Zisowsky_2014 | not_relevant | 0 | 0 | The provided text describes a time-course model for AST (aspartate aminotransferase) levels, not a concentration- or dose-response relationship for clazosentan. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 14:46 UTC</sub>

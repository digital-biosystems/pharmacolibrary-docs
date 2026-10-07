<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03G&quot;,&quot;href&quot;:&quot;atc/G03G.md&quot;},{&quot;label&quot;:&quot;Follitropin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Follitropin_Rose2016_reference&quot;,&quot;label&quot;:&quot;Rose_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_follitropin/Follitropin_Rose2016_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Follitropin

- **generic name:** Follitropin
- **ATC codes:** `G03GA05`, `G03GA06`, `G03GA10`
- **DrugBank:** [DB00066](https://go.drugbank.com/drugs/DB00066) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Follitropin, a follicle-stimulating hormone preparation, is used to treat infertility. It is an approved medicine, used widely in fertility treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20817286](https://www.wikidata.org/wiki/Q20817286) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:54 | 3:32 | 1/0/0 | 0/0/1 | 0/0/0 | 188,534/7,305 | einfracz / qwen3.8-27b | 11 | 2/6 | 9/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Rose_2016_reference](drugs/drug_follitropin/Follitropin_Rose2016_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Rose TH et al., Characterisation of Population Pharmaco…, Drugs in R&D (2016) | [10.1007/s40268-016-0126-z](https://doi.org/10.1007/s40268-016-0126-z) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Taketani_2010_Time_to_dominant_follicle_18_mm](drugs/drug_follitropin/pd_Taketani_2010_Time_to_dominant_follicle_18_mm.md) | Time to dominant follicle ≥18 mm ← follitropin · time-to-event model | — | Taketani Y et al., Recombinant follicle-stimulating hormon…, Reproductive medicine and b… (2010) | [10.1007/s12522-009-0044-7](https://doi.org/10.1007/s12522-009-0044-7) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=follitropin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: FSHR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 40 matched, 24 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hærvig_2022.pdf` | Hærvig KK et al., Fetal exposure to maternal cigarette sm…, European journal of epidemi… (2022) | pd | 5 | [10.1007/s10654-022-00869-2](https://doi.org/10.1007/s10654-022-00869-2) | [35476275](https://www.ncbi.nlm.nih.gov/pubmed/35476275) | metadata signals extractable PD data (exposure-response) |

<sub>queue written 2026-10-07T08:53:02.530824+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abe_2022 | irrelevant | 2 | 0 | The paper is a review of Follitropin Delta that describes the structure of a population PK model and covariates but does not report specific quantitative parameter values (like absolute CL or V) in the provided text. |
| popPK | Amer_2025 | irrelevant | 0 | 0 | The paper is a general review on peptide delivery and does not report any pharmacokinetic parameters for follitropin. |
| popPK | Bhalla_1976 | irrelevant | 0 | 0 | The paper reports in vitro binding constants (Kd) for follitropin to testicular factors, not pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Bryant_1994 | irrelevant | 0 | 0 | The study is an in vitro structural binding study of the TSH receptor, not a pharmacokinetic study of follitropin. |
| PGx | Dias_2021 | not_relevant | 1 | 1 | The paper is a review of structural glycosylation differences between follitropin preparations and their effects on PK/PD, but it does not report pharmacogenomic effects (patient gene variants) on drug response. |
| popPK | Li_2000 | irrelevant | 0 | 0 | The study is an in-vitro cell culture experiment examining steroidogenic responses (E2/P4 production) and does not report any pharmacokinetic parameters (CL, V, T1/2) for follitropin. |
| popPK | Munier_2021 | irrelevant | 0 | 0 | The study investigates the effects of p,p'DDT on receptor signaling (V2R, LHR/FSHR) in cell lines, not the pharmacokinetics of follitropin. |
| popPK | Picard_2008 | irrelevant | 2 | 1 | The study reports bioequivalence ratios (Cmax and AUC) rather than absolute quantitative PK parameters (CL, V, t1/2, ka) for follitropin. |
| popPK | Riccetti_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of glycosylation and bioactivity, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Ulloa-Aguirre_2025 | not_relevant | 0 | 0 | The paper reviews the effects of post-translational glycosylation modifications on FSH function, not the effect of host gene variants (pharmacogenomics) on PK/PD parameters. |
| popPK | Weiss_2026 | irrelevant | 0 | 0 | The study is a clinical trial assessing embryo morphokinetics and fertility outcomes, not a pharmacokinetic study reporting disposition parameters for follitropin. |
| PGx | Zerfaoui_1996 | not_relevant | 0 | 0 | The paper discusses the structural glycosylation and immunoassay recognition of pituitary hormones, not pharmacogenomic effects on PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:53 UTC</sub>

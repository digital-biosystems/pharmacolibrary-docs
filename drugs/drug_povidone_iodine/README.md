<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;povidone-iodine&quot;}]"></div>

# povidone-iodine

- **generic name:** povidone-iodine
- **ATC codes:** `D08AG02`, `D09AA09`, `D11AC06`, `G01AX11`, `R02AA15`, `S01AX18`
- **DrugBank:** [DB06812](https://go.drugbank.com/drugs/DB06812) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Povidone-iodine is an iodine-based antiseptic used to disinfect the skin and prevent infection in wounds and other sites. It is widely used in many forms, including skin antiseptics, medicated dressings, shampoos, gynecological, throat, and eye preparations, and is listed as an essential medicine by the WHO.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q241516](https://www.wikidata.org/wiki/Q241516) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| iodine | metabolite | 253.8 | I2 | PubChem | [807](https://pubchem.ncbi.nlm.nih.gov/compound/807) | Eloot_2010 |
| povidone_iodine | metabolite | 364.944 | C6H9I2NO | PubChem | [410087](https://pubchem.ncbi.nlm.nih.gov/compound/410087) | Eloot_2010 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 21:23 | 3:09 | 0/0/1 | 0/0/0 | 0/0/0 | 17,009/4,130 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 2/0 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Eloot_2010_reference](drugs/drug_povidone_iodine/PovidoneIodine_Eloot2010_reference.md) | — | 2-compartment (no model) | 3 | Eloot S et al., How to remove accumulated iodine in bur…, Nephrology, dialysis, trans… (2010) | [10.1093/ndt/gfp647](https://doi.org/10.1093/ndt/gfp647) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=povidone_iodine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | skin | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Eloot_2010.pdf` | Eloot S et al., How to remove accumulated iodine in bur…, Nephrology, dialysis, trans… (2010) | popPK | 9 | [10.1093/ndt/gfp647](https://doi.org/10.1093/ndt/gfp647) | [19965987](https://pubmed.ncbi.nlm.nih.gov/19965987) | The paper reports specific quantitative compartmental PK parameters (V1, V2, K12) for iodine (the active moiety of povidone-iodine) in human patients. |
| `Park_2014.pdf` | Park KH et al., In vitro and in vivo efficacy of drugs…, Journal of fish diseases (2014) | pd | 4 | [10.1111/jfd.12104](https://doi.org/10.1111/jfd.12104) | [23952334](https://www.ncbi.nlm.nih.gov/pubmed/23952334) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-29T21:21:36.759915+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Anderson_2015 | not_relevant | 0 | 0 | The paper evaluates the antimicrobial efficacy of povidone-iodine against MRSA but does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Aydamirov_2023 | not_relevant | 0 | 0 | The paper evaluates in vitro antiviral efficacy and cytotoxicity of povidone-iodine, containing no pharmacogenomic data or PK/PD parameter analysis. |
| PGx | Hsieh_2020 | not_relevant | 0 | 0 | The paper reports in vitro algaecide efficacy of povidone-iodine against Prototheca isolates, not a pharmacogenomic effect on human PK or PD parameters. |
| popPK | Morettin_2023 | irrelevant | 0 | 0 | The study focuses on viral titers and clinical outcomes in adenoviral conjunctivitis, not on the pharmacokinetic disposition parameters of povidone-iodine. |
| PGx | Padzik_2018 | not_relevant | 0 | 0 | The paper investigates the in vitro anti-amoebic activity of povidone iodine on Acanthamoeba strains and does not report any pharmacogenomic effects on human pharmacokinetic or pharmacodynamic parameters. |
| popPK | Park_2014 | irrelevant | 0 | 0 | no_text gate: only 175 chars of text extracted (&lt; 400) |
| PD | Park_2014 | not_relevant | 0 | 0 | The paper focuses on the efficacy of drugs against a protozoan parasite in ascidians and does not mention povidone-iodine or report any pharmacodynamic parameters for it. |
| PGx | Sobukawa_2011 | not_relevant | 0 | 0 | The paper evaluates the in vitro algaecide efficacy of disinfectants against different genotypes of the pathogen Prototheca zopfii, not the pharmacogenomics of the drug povidone iodine in a host. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-29 21:21 UTC</sub>

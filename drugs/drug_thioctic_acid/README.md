<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;thioctic acid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;ThiocticAcid_Field2021_reference&quot;,&quot;label&quot;:&quot;Field_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_thioctic_acid/ThiocticAcid_Field2021_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# thioctic acid

- **generic name:** thioctic acid
- **ATC codes:** `A16AX01`
- **DrugBank:** [DB00166](https://go.drugbank.com/drugs/DB00166)
- **groups:** approved, investigational, nutraceutical

## About

**Description.** A vitamin-like antioxidant.

**Indication.** For nutritional supplementation, also for treating dietary shortage or imbalance.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 09:54 | 11:56 | 0/1/0 | 0/0/0 | 0/0/0 | 80,779/26,253 | openai / gpt-5.6-luna | 6 | 2/4 | 5/1 | 0 |

## popPK records

| status | detail | model structure | params | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Field_2021_reference](drugs/drug_thioctic_acid/ThiocticAcid_Field2021_reference.md) | 1-compartment (no model) | 2 | Field CL et al., PHARMACOKINETICS OF SUBCUTANEOUS ALPHA…, Journal of zoo and wildlife… (2021) | [10.1638/2020-0223](https://doi.org/10.1638/2020-0223) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=thioctic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `POR` inhibitor | DrugBank actor |
| target | blood | `ACHE` inhibitor | DrugBank actor |
| target | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: LIAS (unknown), LIPT1 (unknown), PTGS2 (inhibitor), SLC5A6 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 24 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Field_2021.pdf` | Field CL et al., PHARMACOKINETICS OF SUBCUTANEOUS ALPHA…, Journal of zoo and wildlife… (2021) | popPK | 9 | [10.1638/2020-0223](https://doi.org/10.1638/2020-0223) | [34687502](https://pubmed.ncbi.nlm.nih.gov/34687502) | The study reports population PK in sea lions with numeric ALA half-lives and Cmax values, although detailed model parameters are not shown. |
| `Nobakht-Haghighi_2018.pdf` | Nobakht-Haghighi N et al., Regulation of aging and oxidative stres…, Molecular and cellular bioc… (2018) | pd | 4 | [10.1007/s11010-018-3363-3](https://doi.org/10.1007/s11010-018-3363-3) | [29696608](https://www.ncbi.nlm.nih.gov/pubmed/29696608) | metadata signals extractable PD data (EC50) |
| `Walimbe_2025.pdf` | Walimbe AS et al., Expanded Clinical Phenotype and the Rol…, American journal of medical… (2025) | pgx | 5 | [10.1002/ajmg.a.64014](https://doi.org/10.1002/ajmg.a.64014) | [39898461](https://www.ncbi.nlm.nih.gov/pubmed/39898461) | metadata signals extractable PGX data (SLC5A6) |

<sub>queue written 2026-09-27T09:49:39.424224+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Cheng_2025 | not_relevant | 0 | 0 | Thioctic acid is used as a hydrogel component, with no pharmacogenomic analysis or PK/PD parameter reported. |
| PGx | El_2026 | not_relevant | 0 | 0 | The paper studies lipoic acid priming and antioxidant responses in wheat exposed to ZnO nanoparticles, without gene variants or pharmacokinetic/pharmacodynamic parameters for thioctic acid. |
| PGx | Galea_2012 | not_relevant | 0 | 0 | The review mentions alpha-lipoic acid treatment in Abcd1-null mice but does not report a pharmacogenomic effect on any thioctic_acid pharmacokinetic or pharmacodynamic parameter. |
| popPK | Lahiani_2016 | irrelevant | 0 | 0 | This is an in-vitro neuroprotection study with no pharmacokinetic disposition parameters or numeric PK values. |
| PD | Lahiani_2016 | not_relevant | 0 | 0 | The reported EC50 of 10 μM is for the AD3 α-lipoic-acid/Tempol PEG conjugate, not thioctic acid itself, and no thioctic-acid-specific exposure- or dose-response relationship is provided. |
| popPK | Lockhart_2000 | irrelevant | 0 | 0 | This is an in-vitro neurotoxicity study with no pharmacokinetic disposition parameters for thioctic acid. |
| popPK | Madawala_2011 | irrelevant | 0 | 0 | This is an in-vitro synthesis and analytical study with no pharmacokinetic disposition parameters or values for thioctic acid. |
| PD | Madawala_2011 | not_relevant | 1 | 1 | The paper reports an in vitro DPPH EC50 of 0.21 for a diacylglycerol–dihydrolipoic acid conjugate, but no dose/concentration-effect relationship or PD parameters for thioctic (lipoic) acid itself. |
| popPK | Mythili_2006 | irrelevant | 0 | 0 | This is a pharmacodynamic cardiotoxicity study with no quantitative pharmacokinetic parameters for thioctic acid. |
| PD | Mythili_2006 | not_relevant | 3 | 1 | The study reports qualitative restoration of calcium-sensitivity and a reduced hill coefficient after a single LA dose, but provides no numeric LA exposure/dose-response parameters or extractable concentration-effect relationship in the supplied text. |
| popPK | Nobakht-Haghighi_2018 | irrelevant | 0 | 0 | no_text gate: only 99 chars of text extracted (&lt; 400) |
| PD | Nobakht-Haghighi_2018 | not_relevant | 0 | 0 | The provided text describes a biological aging/oxidative-stress study but reports no extractable thioctic-acid exposure- or dose-response relationship or numeric PD parameters. |
| PGx | Peng_2004 | not_relevant | 0 | 0 | The paper concerns flunitrazepam metabolism and NADPH-cytochrome P-450 reductase activity, not thioctic acid or a genetic variant/genotype/phenotype effect on a PK/PD parameter. |
| PGx | Saito_2018 | not_relevant | 1 | 8 | HLA-DRB1*04:06/*04:03 are associated with alpha-lipoic-acid-induced insulin autoimmune syndrome, but no genotype effect on a thioctic_acid PK or PD parameter is reported. |
| PGx | Schauer_2025 | not_relevant | 0 | 1 | The study evaluates genotype-associated changes in urinary detoxification biomarkers after a multi-ingredient supplement regimen, but reports no pharmacokinetic or pharmacodynamic parameter for thioctic acid. |
| PGx | Talaverón-Rey_2023 | not_relevant | 1 | 8 | PANK2 variants are linked to cellular response to alpha-lipoic acid, but the paper reports no pharmacokinetic or fitted pharmacodynamic parameter for thioctic acid. |
| PGx | Torchia_2025 | not_relevant | 0 | 0 | The review only mentions alpha lipoic acid (thioctic acid) as a preclinical treatment and reports no gene variant or genotype effects on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Venkatraman_2004 | irrelevant | 0 | 0 | This study evaluates thioctic-acid derivatives for pharmacological activity but reports no quantitative pharmacokinetic disposition parameters. |
| PGx | Vesnina_2026 | not_relevant | 0 | 0 | This review discusses genetic regulation of the citric acid cycle and mentions alpha-lipoic acid, but reports no genotype-dependent pharmacokinetic or pharmacodynamic parameter for thioctic acid. |
| PGx | Walimbe_2025 | not_relevant | 0 | 0 | The paper describes SLC5A6 deficiency and clinical response to lipoic acid supplementation but reports no pharmacokinetic or pharmacodynamic parameter of thioctic acid or fitted genotype effect size. |
| popPK | Wang_2013 | irrelevant | 0 | 0 | This is a cellular oxidative-stress study, not a pharmacokinetic study, and reports no thioctic-acid disposition parameters. |
| PGx | Wang_2013 | not_relevant | 0 | 0 | The paper does not study thioctic_acid pharmacokinetics or pharmacodynamics, nor report effects of genetic variants, genotypes, or phenotypes on PK/PD parameters. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | This antiviral cell and fish efficacy study reports EC50 and CC50 but no quantitative pharmacokinetic disposition parameters for thioctic acid. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 09:49 UTC</sub>

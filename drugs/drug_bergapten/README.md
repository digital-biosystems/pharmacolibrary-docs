<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D05B&quot;,&quot;href&quot;:&quot;atc/D05B.md&quot;},{&quot;label&quot;:&quot;bergapten&quot;}]"></div>

# bergapten

- **generic name:** bergapten
- **ATC codes:** `D05BA03`
- **DrugBank:** [DB12216](https://go.drugbank.com/drugs/DB12216) · **PubChem:** [CID 2355](https://pubchem.ncbi.nlm.nih.gov/compound/2355)
- **molar mass:** 216.192 g/mol (C12H8O4) — DrugBank
- **groups:** investigational

## About

Bergapten, a psoralen, has been used as a photosensitizing antipsoriatic agent for skin conditions such as psoriasis. It is currently considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q414779](https://www.wikidata.org/wiki/Q414779) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:06 | 4:05 | 0/0/0 | 0/1/0 | 0/0/0 | 52,065/8,625 | openai / gpt-6-luna | 7 | 2/5 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Xia_2026_inflammatory_cytokine_levels](drugs/drug_bergapten/pd_Xia_2026_inflammatory_cytokine_levels.md) | inflammatory cytokine levels ← bergapten · direct sigmoid Emax (Hill) effect | — | Xia J et al., Study on the pharmacodynamic material b…, Journal of pharmaceutical a… (2026) | [10.1016/j.jpba.2025.117227](https://doi.org/10.1016/j.jpba.2025.117227) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 44 matched, 42 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ma_2012.pdf` | Ma Y et al., [Phamacokinetic study of bergapten in r…, Zhongguo Zhong yao za zhi =… (2012) | popPK | 9 | not captured | [22568245](https://pubmed.ncbi.nlm.nih.gov/22568245) | The study reports a two-compartment model with first-order absorption, but no numeric disposition parameters are provided. |
| `Xia_2026.pdf` | Xia J et al., Study on the pharmacodynamic material b…, Journal of pharmaceutical a… (2026) | popPK | 8 | [10.1016/j.jpba.2025.117227](https://doi.org/10.1016/j.jpba.2025.117227) | [41223645](https://pubmed.ncbi.nlm.nih.gov/41223645) | Bergapten was modeled in rats using a PK-PD Sigmoid-Emax model, but no numeric parameter values are shown here. |
| `Caboni_2015.pdf` | Caboni P et al., Nematicidal activity of furanocoumarins…, Pest management science (2015) | pd | 4 | [10.1002/ps.3890](https://doi.org/10.1002/ps.3890) | [25157855](https://www.ncbi.nlm.nih.gov/pubmed/25157855) | metadata signals extractable PD data (EC50) |
| `Bendriss_1996.pdf` | Bendriss EK et al., Inhibition of caffeine metabolism by 5-…, British journal of clinical… (1996) | pgx | 7 | [10.1046/j.1365-2125.1996.33311.x](https://doi.org/10.1046/j.1365-2125.1996.33311.x) | [8735685](https://www.ncbi.nlm.nih.gov/pubmed/8735685) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Harapu_2010.pdf` | Harapu CD et al., [Flavonoids--bioactive compounds in fru…, Revista medico-chirurgicala… (2010) | pgx | 7 | not captured | [21500482](https://www.ncbi.nlm.nih.gov/pubmed/21500482) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ho_2000.pdf` | Ho PC et al., Content of CYP3A4 inhibitors, naringin,…, Pharmaceutica acta Helvetiae (2000) | pgx | 7 | [10.1016/s0031-6865(99)00062-x](https://doi.org/10.1016/s0031-6865(99)00062-x) | [10812937](https://www.ncbi.nlm.nih.gov/pubmed/10812937) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Malhotra_2001.pdf` | Malhotra S et al., Seville orange juice-felodipine interac…, Clinical pharmacology and t… (2001) | pgx | 7 | [10.1067/mcp.2001.113185](https://doi.org/10.1067/mcp.2001.113185) | [11180034](https://www.ncbi.nlm.nih.gov/pubmed/11180034) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T21:04:59.618331+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alehaideb_2021 | not_relevant | 0 | 0 | The paper evaluates furanocoumarin dose effects on CYP1A2 activity and caffeine clearance, not genotype-dependent effects on bergapten pharmacokinetics or pharmacodynamics. |
| PGx | Alehaideb_2021_2 | not_relevant | 0 | 0 | The study examines furanocoumarin inhibition of caffeine metabolism but does not report gene variant, genotype, or phenotype effects on any bergapten PK or PD parameter. |
| PGx | Bendriss_1996 | not_relevant | 0 | 0 | The paper studies bergapten’s inhibition of caffeine metabolism, not a gene-, genotype-, or phenotype-dependent effect on bergapten’s PK or PD. |
| popPK | Bode_2005 | irrelevant | 0 | 0 | Bergapten is only a comparator in an in-vitro phototoxicity study, with no pharmacokinetic parameters reported. |
| popPK | Caboni_2015 | irrelevant | 0 | 0 | This is a nematicidal activity study and reports no pharmacokinetic parameters for bergapten. |
| PGx | Chlouchi_2007 | not_relevant | 0 | 0 | The study examines bergapten’s induction of UGT1A1 activity, not a genetic variant, genotype, or phenotype affecting bergapten’s PK or PD. |
| PGx | Fujita_2008 | not_relevant | 0 | 0 | The study measures citrus-extract inhibition of CYP enzymes and bergapten content, but reports no gene variant, genotype, or phenotype effect on a bergapten PK/PD parameter. |
| PGx | Harapu_2010 | not_relevant | 0 | 0 | The text mentions bergapten as a grapefruit-juice constituent but reports no genetic effect on its PK or PD. |
| PGx | Ho_2000 | not_relevant | 0 | 0 | The paper reports bergapten content in grapefruit products, not a gene variant or phenotype effect on a pharmacokinetic or pharmacodynamic parameter of bergapten. |
| PGx | Ho_2001 | not_relevant | 0 | 0 | The paper measures bergapten’s inhibition of CYP3A4 in vitro, not a genetic variant/genotype/phenotype effect on bergapten’s PK or PD. |
| PGx | Kim_2016 | not_relevant | 0 | 0 | The study examines dietary furanocoumarins and PhIP metabolism in rats, not a genetic effect on bergapten pharmacokinetics or pharmacodynamics. |
| PGx | Kim_2016_2 | not_relevant | 0 | 0 | The study reports no gene variant, genotype, or phenotype effect on bergapten PK or PD; bergapten was only quantified in plant extracts and was not tested for effects. |
| PGx | Ma_1994 | not_relevant | 1 | 2 | Both CYP6B1 alleles metabolize bergapten, but the text does not report a genotype-dependent change in its metabolism or another PK/PD parameter. |
| popPK | Ma_2012 | relevant | 9 | 0 | The study reports a two-compartment model with first-order absorption, but no numeric disposition parameters are provided. |
| PGx | Malhotra_2001 | not_relevant | 0 | 0 | The paper studies bergapten’s CYP3A4-inhibitory activity and its effects on felodipine, but reports no pharmacogenomic effect on bergapten’s PK or PD. |
| PGx | Mao_2006 | not_relevant | 0 | 0 | The study tests CYP6AB3 substrate binding and metabolism in vitro; it does not compare genotypes or report a pharmacogenomic effect on bergapten PK/PD. |
| PGx | Messer_2012 | not_relevant | 0 | 0 | The paper reports CYP3A4 inhibition by furocoumarins, but no genetic variation or genotype/phenotype effect on a bergapten PK or PD parameter. |
| PGx | Ohnishi_2000 | not_relevant | 0 | 0 | The study reports in vitro effects of bergapten and other furanocoumarins on vinblastine uptake and CYP3A4 activity, but no pharmacogenomic effect on bergapten. |
| PGx | Papagiannidou_2014 | not_relevant | 0 | 0 | The text reports bergapten (5-methoxypsoralen) inhibiting melatonin metabolism, not a genetic effect on bergapten PK or PD. |
| PGx | Peterson_2006 | not_relevant | 0 | 0 | The paper studies phytochemical inhibition of CYP1A2 and AFB mutagenicity, not a genetic effect on a PK/PD parameter of bergapten. |
| PGx | Stohs_2014 | not_relevant | 0 | 0 | The study measures furanocoumarin content in bitter orange extracts and reports no gene-related effect on a bergapten PK or PD parameter. |
| PGx | Wang_2024 | not_relevant | 0 | 0 | The study reports bergapten-mediated changes in tofacitinib pharmacokinetics, but no gene variant, genotype, or phenotype effect on bergapten’s PK or PD. |
| popPK | Wrześniok_2017 | irrelevant | 0 | 0 | In-vitro melanoma-cell cytotoxicity is reported, with no quantitative pharmacokinetic parameters. |
| popPK | Xia_2026 | relevant | 8 | 0 | Bergapten was modeled in rats using a PK-PD Sigmoid-Emax model, but no numeric parameter values are shown here. |
| PGx | Xu_2023 | not_relevant | 0 | 0 | Reports bergapten’s effect on macitentan metabolism and pharmacokinetics, not a gene variant/genotype/phenotype effect on bergapten’s PK or PD. |
| PGx | Yamaguchi_2017 | not_relevant | 0 | 0 | The paper compares furanocoumarin structures for CYP3A4 inhibition but reports no gene variant, genotype, or phenotype effect on a bergapten PK or PD parameter. |
| PGx | Yao_2026 | not_relevant | 0 | 0 | No gene variant, genotype, or phenotype effect is reported; the paper evaluates CYP inhibition by an herbal extract. |
| PGx | Zaidi_2007 | not_relevant | 0 | 0 | The paper studies 5-MOP inhibition of CYP3A4, not a genetic effect on a bergapten PK or PD parameter. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>

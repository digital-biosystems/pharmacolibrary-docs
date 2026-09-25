<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;citalopram&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Citalopram_Friberg2006_reference&quot;,&quot;label&quot;:&quot;Friberg_2006_reference&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/Citalopram_Friberg2006_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Citalopram_Akil2016_reference&quot;,&quot;label&quot;:&quot;Akil_2016_reference&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/Citalopram_Akil2016_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Citalopram_Weisskopf2020_reference&quot;,&quot;label&quot;:&quot;Weisskopf_2020_reference&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/Citalopram_Weisskopf2020_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# citalopram

- **generic name:** citalopram
- **ATC codes:** `N06AB04`
- **DrugBank:** [DB00215](https://go.drugbank.com/drugs/DB00215)
- **groups:** approved, investigational

## About

**Description.** Citalopram is an antidepressant belonging to the class of selective _serotonin-reuptake inhibitors_ (SSRIs) widely used to treat the symptoms of depression. It is a racemic bicyclic phthalate derivate and is the only compound with a tertiary amine and 2 nitrogen-containing metabolites among all SSRIs.[A261316,A14720] Citalopram enhances serotonergic transmission through the inhibition of serotonin reuptake, and among all the SSRIs, citalopram appears to be the most selective toward serotonin reuptake inhibition.[A261316,A14720] Specifically, it has a very minimal effect on dopamine and norepinephrine transportation and virtually no affinity for muscarinic, histaminergic, or GABAergic receptors.[A261316]

Citalopram was approved by the FDA in 1998 for the treatment of depression in adults 18 years or older.[L5230]

**Indication.** Citalopram is approved by the FDA for treating adults with major depressive disorder.[L47941] It has also been used off-label to treat various diseases, including but not limited to sexual dysfunction, ethanol abuse, psychiatric conditions such as obsessive-compulsive disorder (OCD), social anxiety disorder, panic disorder, and diabetic neuropathy.[L5224,A321,A322,A261296]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-23 20:00 | 3:29 | 2/0/1 | 0/0/0 | 0/0/0 | 33,329/5,469 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 3/2 | 6/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed</span> | [Friberg_2006_reference](drugs/drug_citalopram/Citalopram_Friberg2006_reference.md) | Friberg LE et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2006) | [10.1111/j.1365-2125.2005.02546.x](https://doi.org/10.1111/j.1365-2125.2005.02546.x) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: model_quarantined: CLelim[central] left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Akil_2016_reference](drugs/drug_citalopram/Citalopram_Akil2016_reference.md) | Akil A et al., A population pharmacokinetic model for…, Journal of pharmacokinetics… (2016) | [10.1007/s10928-015-9457-6](https://doi.org/10.1007/s10928-015-9457-6) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: model_quarantined: Vd left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Weisskopf_2020_reference](drugs/drug_citalopram/Citalopram_Weisskopf2020_reference.md) | Weisskopf E et al., A population pharmacokinetic model for…, British journal of clinical… (2020) | [10.1111/bcp.14278](https://doi.org/10.1111/bcp.14278) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=citalopram) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate, `MAOA` substrate, `MAOB` substrate | DrugBank actor |
| metabolism | liver | `AOX1` substrate, `CYP1A2` inhibitor, `CYP2C19` inhibitor/substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `MAOA` substrate | DrugBank actor |
| metabolism | platelet | `MAOB` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `MAOA` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…pram is found unchanged in the urine, while 10% is found in feces.[A37688] Following intra…”</sub> | prose |
| excretion | kidney | <sub>“…23% of an oral dose of citalopram is found unchanged in the urine, while 10% is found in f…”</sub> | prose |
| target | brain | `SLC6A4` inhibitor | DrugBank actor |
| target | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: HRH1 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 75 matched, 20 returned
- **screened:** 5  ·  **relevant:** 6
- **records:** 3  ·  extracted 1  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Friberg_2005.pdf` | Friberg LE et al., The population pharmacokinetics of cita…, Journal of pharmacokinetics… (2005) | popPK | 10 | [10.1007/s10928-005-0022-6](https://doi.org/10.1007/s10928-005-0022-6) | [16307209](https://pubmed.ncbi.nlm.nih.gov/16307209) | The paper performs a Bayesian population pharmacokinetic analysis of citalopram overdose data and explicitly estimates compartmental parameters including clearance, volume of distribution, and absorption rate. |
| `Velez_2015.pdf` | Velez de Mendizabal N et al., A population PK model for citalopram an…, Journal of pharmacokinetics… (2015) | popPK | 10 | [10.1007/s10928-015-9448-7](https://doi.org/10.1007/s10928-015-9448-7) | [26395999](https://pubmed.ncbi.nlm.nih.gov/26395999) | The paper explicitly develops and reports quantitative population pharmacokinetic parameters for citalopram in rats using a NONMEM-based compartmental model. |
| `Wu_2020.pdf` | Wu X et al., Physiologically Based Pharmacokinetic A…, Journal of clinical pharmac… (2020) | popPK | 10 | [10.1002/jcph.1541](https://doi.org/10.1002/jcph.1541) | [31750550](https://pubmed.ncbi.nlm.nih.gov/31750550) | The paper develops and validates a human PBPK/population model for citalopram, explicitly reporting quantitative disposition parameters such as clearance, volume of distribution, tissue partition coefficients, and absorption rates. |
| `Yin_2006.pdf` | Yin OQ et al., Phenotype-genotype relationship and cli…, Journal of clinical psychop… (2006) | popPK | 10 | [10.1097/01.jcp.0000227355.54074.14](https://doi.org/10.1097/01.jcp.0000227355.54074.14) | [16855453](https://pubmed.ncbi.nlm.nih.gov/16855453) | The paper explicitly describes a NONMEM-based population pharmacokinetic model for citalopram, reporting quantitative estimates for apparent clearance, volume of distribution, and absorption rate constant along with covariate effects. |

<sub>queue written 2026-07-18T01:46:52.879882+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_2020 | irrelevant | not captured | not captured | The study focuses on acylcarnitine metabolomic profiles as biomarkers for depression phenotypes and does not measure or model any pharmacokinetic parameters for citalopram. |
| popPK | Blumenthal_2014 | irrelevant | not captured | not captured | The paper is an observational clinical study on antidepressant-associated weight gain and contains no pharmacokinetic parameters or population-PK modeling for citalopram. |
| popPK | Bosch_2026 | irrelevant | not captured | not captured | The study reports only cross-sectional serum concentrations and metabolite ratios, lacking compartmental or population pharmacokinetic modeling and disposition parameters like clearance or volume of distribution. |
| popPK | Ho_2016 | irrelevant | not captured | not captured | The paper focuses on pharmacodynamic exposure-response modeling and uses pre-calculated AUC values from a previously published population PK model rather than reporting new citalopram disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-23 19:57 UTC</sub>

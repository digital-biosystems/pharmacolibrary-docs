<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;escitalopram&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Escitalopram_Friberg2006_reference&quot;,&quot;label&quot;:&quot;Friberg_2006_reference&quot;,&quot;href&quot;:&quot;drugs/drug_escitalopram/Escitalopram_Friberg2006_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Escitalopram_Liu2022_reference&quot;,&quot;label&quot;:&quot;Liu_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_escitalopram/Escitalopram_Liu2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Escitalopram_Liu2023_reference&quot;,&quot;label&quot;:&quot;Liu_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_escitalopram/Escitalopram_Liu2023_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# escitalopram

- **generic name:** escitalopram
- **ATC codes:** `N06AB10`
- **DrugBank:** [DB01175](https://go.drugbank.com/drugs/DB01175)
- **groups:** approved, investigational

## About

**Description.** Escitalopram is a selective serotonin re-uptake inhibitor (SSRI) and the S-enantiomer of racemic [citalopram].[A185420] It is used to restore serotonergic function in the treatment of depression and anxiety.[L8513,L8516,L8522] Escitalopram is approximately 150 times more potent than citalopram’s R-enantiomer and is responsible for the vast majority of citalopram’s clinical activity, with some evidence suggesting that the R-enantiomer of racemic citalopram actively dampens the activity of escitalopram rather than existing simply as an inactive enantiomer.[A39738,A185819] Amongst SSRIs, escitalopram exerts the highest degree of selectivity for the serotonin transporter (SERT) relative to other off-targets which may explain its lower rates of adverse effects as compared to other agents in this class.[A185726] Escitalopram also differentiates itself from other SSRIs via allosteric action on its target - this may be the mechanism responsible for its observed superior efficacy and faster onset compared to other SSRIs.[A185825,A185726,A185822]

**Indication.** Escitalopram is indicated for the acute and maintenance treatment of major depressive disorder (MDD) in adults and pediatric patients 12 years old and older and for the acute treatment of generalized anxiety disorder (GAD) in adults and pediatric patients 7 years old and older.[L8513,L8513] It is additionally indicated for symptomatic relief of obsessive-compulsive disorder (OCD) in Canada.[L8516]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-23 21:49 | 5:07 | 2/1/0 | 0/0/0 | 0/0/0 | 82,065/7,181 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 13/1 | 8/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed</span> | [Friberg_2006_reference](drugs/drug_escitalopram/Escitalopram_Friberg2006_reference.md) | Friberg LE et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2006) | [10.1111/j.1365-2125.2005.02546.x](https://doi.org/10.1111/j.1365-2125.2005.02546.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Liu_2022_reference](drugs/drug_escitalopram/Escitalopram_Liu2022_reference.md) | Liu S et al., Population pharmacokinetics model for e…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.964758](https://doi.org/10.3389/fphar.2022.964758) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Liu_2023_reference](drugs/drug_escitalopram/Escitalopram_Liu2023_reference.md) | Liu X et al., Escitalopram Personalized Dosing: A Pop…, Drug design, development an… (2023) | [10.2147/DDDT.S425654](https://doi.org/10.2147/DDDT.S425654) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=escitalopram) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate, `MAOA` substrate, `MAOB` substrate | DrugBank actor |
| metabolism | liver | `AOX1` substrate, `CYP2C19` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` substrate, `MAOA` substrate | DrugBank actor |
| metabolism | platelet | `MAOB` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `MAOA` substrate | DrugBank actor |
| excretion | kidney | <sub>“…am, approximately 8% of the total dose is eliminated in the urine as unchanged escitalopra…”</sub> | prose |
| excretion | liver | <sub>“…e as S-desmethylcitalopram.[L8513,L8516,L8522] The apparent hepatic clearance of escitalop…”</sub> | prose |
| target | brain | `SLC6A4` binder | DrugBank actor |
| target | platelet | `SLC6A4` binder | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (inhibitor), ADRA2A (inhibitor), CHRM1 (inhibitor), DRD2 (inhibitor), HRH1 (inhibitor), HTR1A (inhibitor), HTR2A (inhibitor), HTR2C (inhibitor), SLC6A2 (inhibitor), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 129 matched, 20 returned
- **screened:** 14  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kim_2021.pdf` | Kim Y et al., Population pharmacokinetic/pharmacodyna…, Journal of affective disord… (2021) | popPK | 10 | [10.1016/j.jad.2021.02.048](https://doi.org/10.1016/j.jad.2021.02.048) | [33647579](https://pubmed.ncbi.nlm.nih.gov/33647579) | The paper explicitly develops a population pharmacokinetic model for escitalopram and reports quantitative disposition parameters including clearance, volume of distribution, and absorption rate constants. |

<sub>queue written 2026-07-18T04:05:43.524343+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bosch_2026 | irrelevant | not captured | not captured | The study reports only steady-state serum concentrations and metabolite ratios without deriving population-PK or compartmental disposition parameters, and does not distinguish escitalopram from citalopram. |
| popPK | Erritzoe_2024 | irrelevant | not captured | not captured | The paper analyzes clinical and psychological outcomes of escitalopram as a comparator treatment arm, with no pharmacokinetic data or modeling reported. |
| popPK | Kofod_2022 | irrelevant | not captured | not captured | The paper investigates inflammatory biomarkers and clinical depression outcomes, containing no pharmacokinetic data or modeling for escitalopram. |
| popPK | Uher_2025 | irrelevant | not captured | not captured | The paper investigates clinical treatment response predictors and contains no pharmacokinetic data or modeling for escitalopram. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-23 21:45 UTC</sub>

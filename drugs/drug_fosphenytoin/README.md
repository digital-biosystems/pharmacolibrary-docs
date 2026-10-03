<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;fosphenytoin&quot;}]"></div>

# fosphenytoin

- **generic name:** fosphenytoin
- **ATC codes:** `N03AB05`
- **DrugBank:** [DB01320](https://go.drugbank.com/drugs/DB01320) · **PubChem:** [CID 56339](https://pubchem.ncbi.nlm.nih.gov/compound/56339)
- **molar mass:** 362.2739 g/mol (C16H15N2O6P) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Fosphenytoin is a water-soluble phenytoin prodrug used only in hospitals for the treatment of epileptic seizures. It works by slowing down impulses in the brain that cause seizures. Its main mechanism is to block frequency-dependent, use-dependent and voltage-dependent neuronal sodium channels, and therefore limit repetitive firing of action potentials.

**Indication.** Fosphenytoin is indicated for the treatment of generalized tonic-clonic status epilepticus and for the prevention and treatment of seizures occurring during neurosurgery in adult patients. It can also be substituted, short-term, for oral phenytoin in patients aged two years and older when oral phenytoin administration is not possible.[L20619]

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fosphenytoin | parent | 362.274 | C16H15N2O6P | DrugBank | [56339](https://pubchem.ncbi.nlm.nih.gov/compound/56339) | Tanaka_2013 |
| phenytoin | metabolite | 252.27 | — | PubChem | [1775](https://pubchem.ncbi.nlm.nih.gov/compound/1775) | Tanaka_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-26 20:47 | 2:09 | 0/6/1 | 0/0/0 | 0/0/0 | 24,046/6,654 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 14/2 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.882). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q77 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Tanaka_2013_reference](drugs/drug_fosphenytoin/Fosphenytoin_Tanaka2013_reference.md) | held back | 1-compartment, IV | 6 | Tanaka J et al., Population pharmacokinetics of phenytoi…, European journal of clinica… (2013) | [10.1007/s00228-012-1373-8](https://doi.org/10.1007/s00228-012-1373-8) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Coles_2015_reference](drugs/drug_fosphenytoin/Fosphenytoin_Coles2015_reference.md) | — | 1-compartment (no model) | 0 | Coles LD et al., Use of IV fosphenytoin pharmacokinetics…, Epilepsia (2015) | [10.1111/epi.12961](https://doi.org/10.1111/epi.12961) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Empey_2013_reference](drugs/drug_fosphenytoin/Fosphenytoin_Empey2013_reference.md) | — | 1-compartment (no model) | 0 | Empey PE et al., Therapeutic hypothermia decreases pheny…, Critical care medicine (2013) | [10.1097/CCM.0b013e318292316c](https://doi.org/10.1097/CCM.0b013e318292316c) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Higuchi_2019_reference](drugs/drug_fosphenytoin/Fosphenytoin_Higuchi2019_reference.md) | — | 1-compartment (no model) | 0 | Higuchi K et al., Population Pharmacokinetic Analysis of…, Therapeutic drug monitoring (2019) | [10.1097/FTD.0000000000000651](https://doi.org/10.1097/FTD.0000000000000651) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Moffett_2018_reference](drugs/drug_fosphenytoin/Fosphenytoin_Moffett2018_reference.md) | — | 1-compartment (no model) | 0 | Moffett BS et al., Fosphenytoin Population Pharmacokinetic…, Pediatric critical care med… (2018) | [10.1097/PCC.0000000000001627](https://doi.org/10.1097/PCC.0000000000001627) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Ohno_2018_reference](drugs/drug_fosphenytoin/Fosphenytoin_Ohno2018_reference.md) | — | 1-compartment (no model) | 0 | Ohno Y et al., Time-Dependent Decline in Serum Phenyto…, Therapeutic drug monitoring (2018) | [10.1097/FTD.0000000000000521](https://doi.org/10.1097/FTD.0000000000000521) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Wainwright_2018_reference](drugs/drug_fosphenytoin/Fosphenytoin_Wainwright2018_reference.md) | — | parent + metabolite (no model) | 0 | MDMarkSWainwright Department of Neurology Division of Pediatric Neurology University of Washington Seattle Children's Hospital Seattle WA, Fat, Pharmacokinetics, and Fosphenytoin… (2018) | [10.1097/PCC.0000000000001647](https://doi.org/10.1097/PCC.0000000000001647) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fosphenytoin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>“…if administered intramuscularly, the peak plasma phenytoin concentration is not reached un…”</sub> | prose |
| distribution | blood | `ALB` other/unknown | DrugBank actor |
| metabolism | kidney | `UGT1A9` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer, `CYP2B6` inducer, `CYP2C19` substrate, `CYP2C9` inducer/substrate, `CYP3A4` inducer/substrate, `UGT1A6` inhibitor, `UGT1A9` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `UGT1A6` inhibitor | DrugBank actor |
| excretion | kidney | <sub>“…excreted in the urine…”</sub> | prose |

<sub>Actors without a tissue in the table: SCN5A (inhibitor), SERPINA7 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 19 returned
- **screened:** 21  ·  **relevant:** 6
- **records:** 7  ·  extracted 0  ·  needs_review 1  ·  rejected 6  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahn_2008 | irrelevant | 1 | 0 | Fosphenytoin is used solely as a stable-labeled tracer to assess phenytoin pharmacokinetics, and no quantitative disposition parameters for fosphenytoin itself are reported. |
| popPK | Hagos_2019 | irrelevant | 0 | 0 | The study focuses exclusively on fentanyl pharmacokinetics, with fosphenytoin only mentioned as a concomitant inducer covariate, so no fosphenytoin PK parameters are reported. |
| popPK | Kapoor_2013 | irrelevant | 1 | 0 | This is an in vitro mechanistic study using fosphenytoin as a model prodrug to evaluate membrane permeability and enzyme kinetics, with no population pharmacokinetic parameters reported. |
| popPK | Noro_2026 | irrelevant | 1 | 0 | The study is a clinical efficacy trial that measures drug concentrations for PK-PD correlation but does not report any population pharmacokinetic parameters or numeric values in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-26 20:45 UTC</sub>

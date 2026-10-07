<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;nebivolol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nebivolol_Marques2022_reference&quot;,&quot;label&quot;:&quot;Marques_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nebivolol/Nebivolol_Marques2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# nebivolol

- **generic name:** nebivolol
- **ATC codes:** `C07AB12`, `C07BB12`, `C07FB12`, `C09BX07`, `C09DX05`, `C10BX22`
- **DrugBank:** [DB04861](https://go.drugbank.com/drugs/DB04861) · **PubChem:** [CID 71301](https://pubchem.ncbi.nlm.nih.gov/compound/71301)
- **molar mass:** 405.435 g/mol (C22H25F2NO4) — DrugBank
- **groups:** approved, investigational

## About

Nebivolol is a selective beta blocker used to treat high blood pressure (arterial hypertension). It is an approved medicine, available alone and in fixed combinations with thiazides, calcium channel blockers, ACE inhibitors, ARBs, or lipid-lowering drugs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418130](https://www.wikidata.org/wiki/Q418130) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nebivolol | parent | 405.435 | C22H25F2NO4 | DrugBank | [71301](https://pubchem.ncbi.nlm.nih.gov/compound/71301) | Marques_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:31 | 6:08 | 1/0/0 | 0/0/0 | 0/0/0 | 156,762/12,807 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 2/4 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.941). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Marques_2022_reference](drugs/drug_nebivolol/Nebivolol_Marques2022_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 | Marques L et al., New Data for Nebivolol after In Silico…, Pharmaceutics (2022) | [10.3390/pharmaceutics14091911](https://doi.org/10.3390/pharmaceutics14091911) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nebivolol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2D6` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRB1 (target), ADRB2 (target), ADRB3 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Briciu_2014.pdf` | Briciu C et al., A pharmacokinetic drug interaction stud…, Journal of clinical pharmac… (2014) | popPK | 8 | [10.1111/jcpt.12180](https://doi.org/10.1111/jcpt.12180) | [24845234](https://pubmed.ncbi.nlm.nih.gov/24845234) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, Tmax, AUC) for nebivolol in humans, though it lacks specific clearance or volume values. |

<sub>queue written 2026-10-07T00:26:38.941604+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bocci_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral screening study that reports EC50 values for nebivolol against SARS-CoV-2, but it does not report any pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Bundkirchen_2001 | irrelevant | 0 | 0 | The study investigates the mechanistic effects of nebivolol on cardiac calcium sensitivity in skinned fibers and isolated trabeculae, not its pharmacokinetic disposition parameters. |
| PD | Bundkirchen_2001 | not_relevant | 0 | 0 | The study reports a negative result (no effect) on cardiac calcium sensitivity and does not provide a pharmacodynamic exposure-response or dose-response model for nebivolol. |
| popPK | Garbán_2004 | irrelevant | 0 | 0 | The study investigates the mechanism of action (estrogen receptor binding and vascular response) in isolated rat aortic rings and cell lines, not pharmacokinetic disposition parameters. |
| popPK | Gschwend_2009 | irrelevant | 0 | 0 | The study is a mechanistic investigation of vascular function in rats and does not report pharmacokinetic parameters for nebivolol. |
| PD | Gschwend_2009 | not_relevant | 2 | 1 | The study reports pharmacodynamic effects (endothelial relaxation) at fixed doses but does not provide concentration-effect data, PK parameters, or a fitted PD model with numeric parameters like EC50 or slope. |
| popPK | Kannan_2012 | irrelevant | 0 | 0 | Nebivolol is used only as a positive control in a zebrafish cardiovascular toxicity assay, and no pharmacokinetic parameters (CL, V, ka, etc.) are reported. |
| PD | Kannan_2012 | not_relevant | 1 | 0 | Nebivolol is used only as a single-dose positive control for comparison; no dose-response curve or numeric PD parameters (EC50, Emax) are reported for nebivolol. |
| popPK | Okamoto_2014 | irrelevant | 0 | 0 | The study is a pharmacodynamic trial assessing blood pressure effects and mechanisms of action, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for nebivolol. |
| popPK | Rawat_2023 | relevant | 4 | 8 | The study reports ocular PK parameters (Cmax, AUC, Tmax) for nebivolol in rabbits, but lacks standard systemic disposition parameters like clearance (CL) or volume of distribution (V). |
| popPK | Rosenkranz_2006 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasodilatory properties in rat aorta, not a pharmacokinetic study reporting disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:26 UTC</sub>

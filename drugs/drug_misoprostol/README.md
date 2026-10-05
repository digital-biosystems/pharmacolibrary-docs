<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;misoprostol&quot;}]"></div>

# misoprostol

- **generic name:** misoprostol
- **ATC codes:** `A02BB01`, `G02AD06`, `M01AE56`
- **DrugBank:** [DB00929](https://go.drugbank.com/drugs/DB00929) · **PubChem:** [CID 5282381](https://pubchem.ncbi.nlm.nih.gov/compound/5282381)
- **molar mass:** 382.5341 g/mol (C22H38O5) — DrugBank
- **groups:** approved, investigational

## About

Misoprostol is a prostaglandin used to treat and prevent peptic ulcers and, as a uterotonic, to induce labour or terminate pregnancy. It is widely used and appears on the WHO list of essential medicines, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416025](https://www.wikidata.org/wiki/Q416025) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| misoprostol | parent | 382.534 | C22H38O5 | DrugBank | [5282381](https://pubchem.ncbi.nlm.nih.gov/compound/5282381) | Vorontsova_2022 |
| misoprostol acid | metabolite | 368.514 | C21H36O5 | PubChem | [6436406](https://pubchem.ncbi.nlm.nih.gov/compound/6436406) | Vorontsova_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 10:16 | 9:54 | 0/1/0 | 1/1/0 | 0/0/0 | 222,059/21,810 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.286). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Vorontsova_2022_reference](drugs/drug_misoprostol/Misoprostol_Vorontsova2022_reference.md) | — | 1-compartment (no model) | 5 | Vorontsova Y et al., Pharmacokinetics of vaginal versus bucc…, Clinical and translational… (2022) | [10.1111/cts.13306](https://doi.org/10.1111/cts.13306) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Nazabal_2023_FR](drugs/drug_misoprostol/pd_Nazabal_2023_FR.md) | firing rate of LC neurons ← misoprostol · direct sigmoid Emax (Hill) effect | — | Nazabal A et al., Inhibition of rat locus coeruleus neuro…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1290605](https://doi.org/10.3389/fphar.2023.1290605) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Norel_1999_relaxation_of_human_bronchial_preparations](drugs/drug_misoprostol/pd_Norel_1999_relaxation_of_human_bronchial_preparations.md) | relaxation of human bronchial preparations ← misoprostol · direct Emax (saturable) effect | — | Norel X et al., Prostanoid receptors involved in the re…, British journal of pharmaco… (1999) | [10.1038/sj.bjp.0702392](https://doi.org/10.1038/sj.bjp.0702392) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=misoprostol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PTGER1 (target), PTGER2 (target), PTGER3 (target), PTGER4 (target), PTGIR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 35 matched, 24 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Morrison_2016.pdf` | Morrison JJ et al., In vitro contractile effects of agents…, European journal of pharmac… (2016) | pd | 5 | [10.1016/j.ejphar.2016.07.025](https://doi.org/10.1016/j.ejphar.2016.07.025) | [27423315](https://www.ncbi.nlm.nih.gov/pubmed/27423315) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-04T10:07:41.359363+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Atuhairwe_2022 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the effectiveness and safety of misoprostol for abortion, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Atuhairwe_2022_2 | irrelevant | 0 | 0 | The study evaluates patient acceptability and satisfaction with misoprostol treatment for abortion, not pharmacokinetic parameters. |
| popPK | Cleeve_2016 | irrelevant | 0 | 0 | The study is a randomized controlled trial assessing patient acceptability and safety of misoprostol for incomplete abortion, reporting no pharmacokinetic parameters. |
| PGx | Del_2000 | not_relevant | 0 | 0 | The paper investigates the role of PGE2 receptor subtypes in chondrocyte differentiation and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of misoprostol. |
| popPK | Gana_1989 | irrelevant | 0 | 0 | The study measures ionic fluxes and blood flow in canine gastric mucosa, not pharmacokinetic disposition parameters. |
| PGx | Heikinheimo_1997 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics of mifepristone and mentions misoprostol only as a combination therapy agent, without reporting any pharmacogenomic effects on misoprostol's PK or PD parameters. |
| popPK | Holt_2019 | irrelevant | 0 | 0 | The paper is a structural homology modeling and docking study of EP4 receptors, not a pharmacokinetic study, and contains no disposition parameters for misoprostol. |
| PD | Holt_2019 | not_relevant | 2 | 2 | The paper focuses on homology modeling and docking of EP4 receptors; while it cites EC50 values for various agonists (including misoprostol) to validate the model, it does not report a pharmacokinetic or pharmacodynamic exposure-response relationship or fit a PD model for misoprostol. |
| popPK | Klingberg-Allvin_2015 | irrelevant | 0 | 0 | The paper is a clinical trial assessing the effectiveness and safety of misoprostol for incomplete abortion, not a pharmacokinetic study. |
| PGx | Konopka_2016 | not_relevant | 2 | 5 | The paper investigates differential gene expression and oxidative markers in myometrial cells from different patient groups (spontaneous vs. non-spontaneous labor) in response to misoprostol, but it does not report a specific genetic variant (genotype) associated with a change in a standard PK or PD parameter of the drug itself. |
| popPK | Larrea_2022 | irrelevant | 0 | 0 | The paper is a sociological study on abortion service utilization and does not contain any pharmacokinetic data for misoprostol. |
| popPK | Longrois_2012 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of receptor subtypes in human arteries, not a pharmacokinetic study, and misoprostol is used only as a tool compound. |
| popPK | Morrison_2016 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| PD | Morrison_2016 | not_relevant | 0 | 0 | The provided text is only the title of a paper and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| popPK | Nazabal_2023 | irrelevant | 0 | 0 | The study is an ex vivo electrophysiological pharmacology experiment measuring receptor potency (EC50) in rat brain slices, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Norel_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of prostanoid receptors in human bronchial tissue, reporting potency (pD2) and efficacy (Emax) rather than pharmacokinetic disposition parameters. |
| popPK | Qian_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor-mediated contractile actions on isolated tissue, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Racké_1995 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of noradrenaline release in rat stomach, not a pharmacokinetic study, and reports no disposition parameters for misoprostol. |
| popPK | Sarkar_2002 | irrelevant | 0 | 0 | The paper is a review of mifepristone pharmacokinetics, and misoprostol is only mentioned as a co-administered agent without any PK parameters reported for it. |
| PGx | Sheibani_2018 | not_relevant | 0 | 0 | The paper is a general safety review of labor induction agents and only mentions pharmacogenomics as a future possibility without reporting any specific genetic effects on misoprostol PK/PD. |
| popPK | Talpain_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of PGE receptor subtypes in human neutrophils and does not report any pharmacokinetic parameters for misoprostol. |
| popPK | Wheeldon_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of prostanoid receptor activity on neutrophils, not a pharmacokinetic study, and reports no disposition parameters for misoprostol. |
| PGx | Wing_2015 | not_relevant | 0 | 0 | The paper is a general review of labor induction agents and explicitly states that there are currently no pharmacogenomic findings affecting dosing for prostaglandins or oxytocin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 10:07 UTC</sub>

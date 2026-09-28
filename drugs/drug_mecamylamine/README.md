<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02B&quot;,&quot;href&quot;:&quot;atc/C02B.md&quot;},{&quot;label&quot;:&quot;mecamylamine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mecamylamine_AlvarezJimenez2017_reference&quot;,&quot;label&quot;:&quot;Alvarez-Jimenez_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_mecamylamine/Mecamylamine_AlvarezJimenez2017_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# mecamylamine

- **generic name:** mecamylamine
- **ATC codes:** `C02BB01`
- **DrugBank:** [DB00657](https://go.drugbank.com/drugs/DB00657) · **PubChem:** [CID 4032](https://pubchem.ncbi.nlm.nih.gov/compound/4032)
- **molar mass:** 167.2911 g/mol (C11H21N) — DrugBank
- **groups:** approved, investigational

## About

**Description.** A nicotinic antagonist that is well absorbed from the gastrointestinal tract and crosses the blood-brain barrier. Mecamylamine has been used as a ganglionic blocker in treating hypertension, but, like most ganglionic blockers, is more often used now as a research tool.

**Indication.** For the treatment of moderately severe to severe essential hypertension and in uncomplicated cases of malignant hypertension

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 21:56 | 16:25 | 0/1/0 | 1/0/0 | 0/0/0 | 215,919/19,671 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 1/3 | 4/0 | 0 |

## popPK records

| status | detail | model structure | params | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.4). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Alvarez-Jimenez_2017_reference](drugs/drug_mecamylamine/Mecamylamine_AlvarezJimenez2017_reference.md) | 1-compartment (no model) | 0 | Alvarez-Jimenez R et al., Pharmacokinetics and pharmacodynamics o…, Journal of psychopharmacolo… (2017) | [10.1177/0269881116681417](https://doi.org/10.1177/0269881116681417) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.068). The first reading is what the record holds.">cross-check: disputed</span> | [Alvarez-Jimenez_2017](drugs/drug_mecamylamine/pd_Alvarez_Jimenez_2017_unknown.md) | Alvarez-Jimenez R et al., Pharmacokinetics and pharmacodynamics o…, Journal of psychopharmacolo… (2017) | [10.1177/0269881116681417](https://doi.org/10.1177/0269881116681417) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mecamylamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…Mecamylamine is almost completely absorbed from the gastrointestinal tract…”</sub> | prose |
| excretion | brain | <sub>“…l excretion of mecamylamine. Mecamylamine crosses the blood-brain and placental barriers.…”</sub> | prose |
| excretion | kidney | <sub>“…Mecamylamine is excreted slowly in the urine in the unchanged form. The rate of its renal…”</sub> | prose |
| excretion | placenta | <sub>“…n of mecamylamine. Mecamylamine crosses the blood-brain and placental barriers.…”</sub> | prose |

<sub>Actors without a tissue in the table: CHRNA2 (target), CHRNA4 (target), CHRNA7 (target), CHRNB2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 110 matched, 22 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hollenhorst_2022.pdf` | Hollenhorst MI et al., Taste Receptor Activation in Tracheal B…, Cells (2022) | pd | 5 | [10.3390/cells11152411](https://doi.org/10.3390/cells11152411) | [35954259](https://www.ncbi.nlm.nih.gov/pubmed/35954259) | metadata signals extractable PD data (EC50) |
| `Badio_1994.pdf` | Badio B et al., Epibatidine, a potent analgetic and nic…, Molecular pharmacology (1994) | pd | 4 | not captured | [8183234](https://www.ncbi.nlm.nih.gov/pubmed/8183234) | metadata signals extractable PD data (EC50) |
| `Reuben_2000.pdf` | Reuben M et al., Nicotine-evoked [3H]5-hydroxytryptamine…, Neuropharmacology (2000) | pd | 4 | [10.1016/s0028-3908(99)00147-1](https://doi.org/10.1016/s0028-3908(99)00147-1) | [10670424](https://www.ncbi.nlm.nih.gov/pubmed/10670424) | metadata signals extractable PD data (EC50) |
| `Salgado_2016.pdf` | Salgado VL, Antagonist pharmacology of desensitizin…, Neurotoxicology (2016) | pd | 4 | [10.1016/j.neuro.2016.08.003](https://doi.org/10.1016/j.neuro.2016.08.003) | [27514662](https://www.ncbi.nlm.nih.gov/pubmed/27514662) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-27T21:46:18.096445+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | An_2012 | not_relevant | 0 | 0 | The paper investigates the effect of cigarette smoke condensate on drug resistance and stem cell properties, using mecamylamine only as a tool to confirm the role of nicotine, without reporting any pharmacogenomic effects on mecamylamine's PK or PD parameters. |
| popPK | Baakman_2017 | relevant | 4 | 2 | The study reports non-compartmental PK parameters (tmax, Cmax) for mecamylamine, but lacks clearance, volume, or half-life values required for compartmental/population PK modeling. |
| popPK | Badio_1994 | irrelevant | 0 | 0 | no_text gate: only 53 chars of text extracted (&lt; 400) |
| PD | Badio_1994 | not_relevant | 0 | 0 | The paper focuses on epibatidine, not mecamylamine, and does not report PD parameters for the target drug. |
| popPK | Brynildsen_2016 | irrelevant | 0 | 0 | Mecamylamine is used only as a pharmacological challenge agent to assess nicotine withdrawal, and no pharmacokinetic parameters for mecamylamine are reported. |
| popPK | Choi_2022 | irrelevant | 0 | 0 | The study is a pharmacodynamic pain model where mecamylamine is used as a receptor antagonist probe, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Choi_2023 | irrelevant | 0 | 0 | Mecamylamine is used only as a pharmacological antagonist to probe mechanisms, not as the subject of a pharmacokinetic study. |
| popPK | Day_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of cholinergic receptors in Schistosoma mansoni, not a pharmacokinetic study, and mecamylamine is used only as an ineffective antagonist. |
| PD | Day_1996 | not_relevant | 0 | 0 | The paper reports that mecamylamine was ineffective at a single concentration (1 mM) and does not provide any dose-response curve or numeric PD parameters for mecamylamine. |
| PGx | Flores_1999 | not_relevant | 0 | 0 | The study investigates pharmacogenetic variability in the response to epibatidine, not mecamylamine, which is only used as an antagonist to confirm the mechanism of action. |
| popPK | Fu_2009 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology paper where mecamylamine is used only as a pharmacological antagonist to block receptors, with no pharmacokinetic parameters reported. |
| PGx | Hahn_2016 | not_relevant | 2 | 5 | The study compares different rat strains (genotypes) for behavioral responses (PD) to mecamylamine, but reports no significant effect on the primary attention parameter (accuracy) and does not provide fitted pharmacokinetic or pharmacodynamic effect sizes for the drug. |
| popPK | Hollenhorst_2022 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| PD | Hollenhorst_2022 | not_relevant | 0 | 0 | The paper focuses on denatonium and ENaC channels in tracheal brush cells, with no mention of mecamylamine or its pharmacodynamic parameters. |
| popPK | Ise_2000 | irrelevant | 0 | 0 | The study is a behavioral pharmacology investigation of nicotine withdrawal aversion and does not report any pharmacokinetic parameters for mecamylamine. |
| popPK | Iwamoto_1990 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment using mecamylamine as an antagonist to block nicotine effects, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Ng_1998 | not_relevant | 0 | 0 | The paper studies the hemodynamic effects of nitric oxide donors in rats and uses mecamylamine only as a pharmacological pretreatment to block ganglionic transmission, without investigating any genetic variants or pharmacogenomic effects on mecamylamine's PK or PD. |
| popPK | Pacheco_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nicotinic receptors where mecamylamine is used only as a pharmacological antagonist, with no pharmacokinetic parameters reported. |
| PD | Pacheco_2001 | not_relevant | 3 | 2 | The paper reports an EC50 for nicotine and notes that mecamylamine blocks the response, but it does not provide a concentration-effect curve or numeric PD parameters (such as IC50 or Ki) for mecamylamine itself. |
| popPK | Reuben_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of nicotinic receptors using mecamylamine as an antagonist, not a pharmacokinetic study of mecamylamine. |
| popPK | Rigo_2017 | irrelevant | 0 | 0 | The study investigates the antinociceptive effects of the spider toxin PhKv, using mecamylamine only as a pharmacological antagonist to confirm a cholinergic mechanism, and does not report any pharmacokinetic parameters for mecamylamine. |
| PD | Rigo_2017 | not_relevant | 0 | 0 | The paper reports PD parameters (ED50, EC50) for the spider toxin PhKv, not for mecamylamine, which is used only as a qualitative antagonist to confirm the cholinergic mechanism. |
| popPK | Salgado_2016 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study on cockroach neurons measuring receptor antagonist potency (IC50), not a pharmacokinetic study reporting disposition parameters for mecamylamine. |
| PGx | Schnoll_2006 | not_relevant | 0 | 0 | The paper is a general review of tobacco dependence treatments and mentions mecamylamine only as a drug with limited efficacy evidence, without reporting any specific pharmacogenomic effects on its PK or PD parameters. |
| popPK | Stojković_2024 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of carveol on neuromuscular systems, using mecamylamine only as a reference antagonist in isolated tissue preparations, and reports no pharmacokinetic parameters for mecamylamine. |
| PD | Stojković_2024 | not_relevant | 0 | 0 | The paper focuses on the pharmacological effects of carveol; mecamylamine is used only as a reference agent to demonstrate carveol's ability to neutralize tetanic fade, with no PD parameters reported for mecamylamine itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 21:46 UTC</sub>

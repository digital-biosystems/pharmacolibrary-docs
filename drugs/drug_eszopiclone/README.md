<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;eszopiclone&quot;}]"></div>

# eszopiclone

- **generic name:** eszopiclone
- **ATC codes:** `N05CF04`
- **DrugBank:** [DB00402](https://go.drugbank.com/drugs/DB00402) · **PubChem:** [CID 969472](https://pubchem.ncbi.nlm.nih.gov/compound/969472)
- **molar mass:** 388.808 g/mol (C17H17ClN6O3) — DrugBank
- **groups:** approved, investigational

## About

Eszopiclone is a sedative-hypnotic related to zopiclone used to treat insomnia. It is approved and used in some countries for insomnia, but a marketing application in the European Union was withdrawn, so it is not authorised there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413184](https://www.wikidata.org/wiki/Q413184) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:27 | 0:44 | 0/0/0 | 0/2/1 | 0/0/0 | 40,290/2,725 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lloyd_1990_35S_TBPS_binding](drugs/drug_eszopiclone/pd_Lloyd_1990_35S_TBPS_binding.md) | 35S-TBPS binding to rat cerebral cortex membranes (maximal enhancement) ← zopiclone · direct Emax (saturable) effect | — | Lloyd GK et al., The activity of zolpidem and other hypn…, The Journal of pharmacology… (1990) | — |
| <span class="pk-badge pk-badge--red">rejected</span> | [Luurila_1996_DSST](drugs/drug_eszopiclone/pd_Luurila_1996_DSST.md) | digit symbol substitution test ← zopiclone · delayed effect through an effect compartment | — | Luurila H et al., Pharmacokinetic-pharmacodynamic modelli…, Pharmacology & toxicology (1996) | [10.1111/j.1600-0773.1996.tb01387.x](https://doi.org/10.1111/j.1600-0773.1996.tb01387.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Luurila_1996_DSST_2](drugs/drug_eszopiclone/pd_Luurila_1996_DSST_2.md) | digit symbol substitution test ← zopiclone · inhibition effect | — | Luurila H et al., Pharmacokinetic-pharmacodynamic modelli…, Pharmacology & toxicology (1996) | [10.1111/j.1600-0773.1996.tb01387.x](https://doi.org/10.1111/j.1600-0773.1996.tb01387.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Luurila_1996_SPV](drugs/drug_eszopiclone/pd_Luurila_1996_SPV.md) | saccadic peak velocity ← zopiclone · delayed effect through an effect compartment | — | Luurila H et al., Pharmacokinetic-pharmacodynamic modelli…, Pharmacology & toxicology (1996) | [10.1111/j.1600-0773.1996.tb01387.x](https://doi.org/10.1111/j.1600-0773.1996.tb01387.x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Luurila_1996_SPV_2](drugs/drug_eszopiclone/pd_Luurila_1996_SPV_2.md) | saccadic peak velocity ← zopiclone · inhibition effect | — | Luurila H et al., Pharmacokinetic-pharmacodynamic modelli…, Pharmacology & toxicology (1996) | [10.1111/j.1600-0773.1996.tb01387.x](https://doi.org/10.1111/j.1600-0773.1996.tb01387.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Morlock_2011_I_GABA_potentiation](drugs/drug_eszopiclone/pd_Morlock_2011_I_GABA_potentiation.md) | GABA-induced chloride current potentiation by eszopiclone ← eszopiclone · direct sigmoid Emax (Hill) effect | — | Morlock EV et al., Different residues in the GABAA recepto…, Molecular pharmacology (2011) | [10.1124/mol.110.069542](https://doi.org/10.1124/mol.110.069542) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=eszopiclone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2C8` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GABRA1 (modulator), GABRA1 (positive allosteric modulator), GABRA2 (modulator), GABRA3 (modulator), GABRA5 (modulator), TSPO (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dresser_2000 | irrelevant | 0 | 0 | Review of CYP3A4 interactions mentioning zopiclone only qualitatively, with no eszopiclone PK parameters or numeric values. |
| popPK | Gaillot_1982 | irrelevant | 1 | 7 | The study reports quantitative PK parameters (clearance, half-life, bioavailability) but for zopiclone, a different drug from eszopiclone, which is never mentioned. |
| popPK | Gaillot_1983 | irrelevant | 2 | 5 | This is a PK study of zopiclone, a different drug from eszopiclone (its S-enantiomer), though some numeric parameters (t½ 4-5 h, CL 300 ml/min) are present in the abstract. |
| popPK | Gex-Fabry_2004 | irrelevant | 0 | 0 | This is a venlafaxine PK/PD study; zopiclone is only co-medication and no eszopiclone parameters are reported. |
| popPK | Han_2025 | irrelevant | 1 | 2 | This is a population-PK model of clozapine; zopiclone appears only as a co-administered DDI covariate (a 25.4% clearance effect), with no PK parameters for zopiclone/eszopiclone itself (ka was fixed from literature). |
| popPK | Lloyd_1990 | irrelevant | 0 | 0 | In-vitro receptor binding study of zopiclone (not eszopiclone) with no PK parameters. |
| popPK | Luurila_1996 | irrelevant | 2 | 8 | This is a PK/PD study of racemic zopiclone, not eszopiclone specifically; numeric CL, V and half-life values are present in the abstract but for the wrong (parent racemate) drug. |
| popPK | Morlock_2011 | irrelevant | 0 | 0 | In-vitro electrophysiology study of GABAA receptor mutations with no pharmacokinetic parameters for eszopiclone. |
| popPK | Munakata_1996 | irrelevant | 0 | 0 | In-vitro electrophysiology of zopiclone (not eszopiclone) in rat neurons; no PK parameters. |
| popPK | Novotna_2014 | irrelevant | 0 | 0 | In-vitro receptor reporter study of enantiopure drugs (zopiclone, not eszopiclone) with no PK parameters. |
| popPK | Petroski_2006 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study of indiplon (a different drug) with no eszopiclone PK parameters; zopiclone appears only as a potency comparator. |
| popPK | Reynolds_1996 | irrelevant | 0 | 0 | In-vitro electrophysiology study of GABAA receptor interactions; no PK parameters for eszopiclone (zopiclone only as pharmacodynamic comparator). |
| popPK | Sanger_1985 | irrelevant | 0 | 0 | Behavioral pharmacology study in mice with no PK parameters for eszopiclone (zopiclone only dosed behaviorally, no disposition values). |

---
<sub>Generated by `docs.py` (scholarv2)</sub>

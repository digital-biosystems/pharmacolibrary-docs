<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;theophylline&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Theophylline_Frymoyer2020_reference&quot;,&quot;label&quot;:&quot;Frymoyer_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_theophylline/Theophylline_Frymoyer2020_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# theophylline

- **generic name:** theophylline
- **ATC codes:** `R03DA04`, `R03DB04`
- **DrugBank:** [DB00277](https://go.drugbank.com/drugs/DB00277) · **PubChem:** [CID 2153](https://pubchem.ncbi.nlm.nih.gov/compound/2153)
- **molar mass:** 180.164 g/mol (C7H8N4O2) — DrugBank
- **groups:** approved, investigational

## About

Theophylline is a bronchodilator used to treat breathing problems such as asthma, pulmonary emphysema, and acute bronchitis. It remains an approved medicine and is still used for obstructive airway diseases, though generally less often than newer inhaled treatments.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q407308](https://www.wikidata.org/wiki/Q407308) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| theophylline | parent | 180.164 | C7H8N4O2 | DrugBank | [2153](https://pubchem.ncbi.nlm.nih.gov/compound/2153) | Frymoyer_2020, Kim_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:16 | 1:36 | 1/1/0 | 1/0/0 | 0/0/0 | 148,027/6,935 | einfracz / qwen3.8-27b | 6 | 5/1 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Frymoyer_2020_reference](drugs/drug_theophylline/Theophylline_Frymoyer2020_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 (+1 cov.) | Frymoyer A et al., Theophylline dosing and pharmacokinetic…, Pediatric research (2020) | [10.1038/s41390-020-01140-8](https://doi.org/10.1038/s41390-020-01140-8) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Kim_2013_reference](drugs/drug_theophylline/Theophylline_Kim2013_reference.md) | — | 1-compartment (no model) | 0 | Kim SE et al., Population pharmacokinetics of theophyl…, Therapeutic drug monitoring (2013) | [10.1097/FTD.0b013e3182866695](https://doi.org/10.1097/FTD.0b013e3182866695) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sugimoto_2001_GABA_induced_currents](drugs/drug_theophylline/pd_Sugimoto_2001_GABA_induced_currents.md) | GABA-induced currents biomarker turnover ← theophylline | — | Sugimoto T et al., Inhibitory effect of theophylline on re…, Neuroreport (2001) | [10.1097/00001756-200103050-00013](https://doi.org/10.1097/00001756-200103050-00013) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=theophylline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `SLC22A7` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2D6` substrate, `CYP2E1` substrate, `CYP3A4` substrate, `SLC22A7` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` inhibitor/substrate, `CYP1B1` substrate | DrugBank actor |
| metabolism | skin | `CYP1B1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADA (inducer), ADA (inhibitor), ADORA1 (target), ADORA2A (target), ADORA2B (target), CPNE1 (binder), HDAC2 (activator), NT5E (inhibitor), PARP1 (inhibitor), PDE3A (inhibitor), PDE4A (inhibitor), PDE4B (inhibitor), PDE5A (inhibitor), RIC3 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 331 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kim_2013.pdf` | Kim SE et al., Population pharmacokinetics of theophyl…, Therapeutic drug monitoring (2013) | popPK | 10 | [10.1097/FTD.0b013e3182866695](https://doi.org/10.1097/FTD.0b013e3182866695) | [23666573](https://pubmed.ncbi.nlm.nih.gov/23666573) | The abstract explicitly reports the final population PK model equations for clearance and volume of distribution with specific numeric coefficients. |
| `Tse_1982.pdf` | Tse FL et al., Theophylline bioavailability in the dog, Journal of pharmaceutical s… (1982) | popPK | 8 | [10.1002/jps.2600711132](https://doi.org/10.1002/jps.2600711132) | [7175732](https://pubmed.ncbi.nlm.nih.gov/7175732) | The paper reports a one-compartment PK model for theophylline in dogs, but the specific numeric parameter values are not present in the provided evidence text. |

<sub>queue written 2026-10-07T22:15:16.538751+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chamorro_2022 | irrelevant | 0 | 0 | The paper describes the synthesis and antioxidant/neuroprotective properties of nitrone compounds where theophylline is used as a chemical precursor (nucleobase) in an in vitro assay, containing no pharmacokinetic parameters for theophylline itself. |
| popPK | Danhof_1993 | irrelevant | 0 | 0 | The paper is a methodological review on PK-PD modelling in rats using various drug classes, where theophylline (specifically cyclopentyl-theophylline) is only mentioned as an example of a competitive antagonist for adenosine receptors, not as the subject of a PK parameter study. |
| popPK | Dekhuijzen_2002 | irrelevant | 0 | 0 | The paper reports the pharmacokinetics of zafirlukast, not theophylline, which is only mentioned as a co-administered agent. |
| popPK | Emami_2020 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of curcumin's relaxant effects on smooth muscle, using theophylline only as a positive control, and does not report pharmacokinetic parameters. |
| popPK | Jackson_1996 | irrelevant | 0 | 0 | The paper studies the vasodilatory properties of maxadilan in rabbit arteries, using theophylline only as a non-specific phosphodiesterase inhibitor control, not as the subject of pharmacokinetic analysis. |
| popPK | Katsiotis_2023 | irrelevant | 0 | 0 | The paper focuses on pharmaceutical formulation and in-vitro drug release kinetics using 3D printing, not in-vivo pharmacokinetics or population PK modeling. |
| popPK | Kaye_2000 | irrelevant | 0 | 0 | The paper is a review of ropinirole pharmacokinetics; theophylline is only mentioned as a CYP1A2 substrate in a drug interaction context with no PK parameters reported. |
| popPK | Kumar_2006 | irrelevant | 0 | 0 | Theophylline is only a co-administered comparator drug in a study focused on the pharmacokinetics of centchroman in rats. |
| popPK | Ma_2016 | irrelevant | 3 | 3 | This is a review article summarizing existing studies rather than reporting original data from a single primary pharmacokinetic study. |
| popPK | Ragazzi_1989 | irrelevant | 0 | 0 | The paper investigates the pharmacological effects (binding, relaxation) of methylxanthine thioderivatives (6-thiocaffeine and 6-thiotheophylline) in vitro and in vivo, but does not report pharmacokinetic parameters (CL, V, ka, etc.) for theophylline itself. |
| popPK | Schaefer_1995 | irrelevant | 0 | 0 | The paper is a review on the pharmacokinetic development of quinolone antibiotics, and theophylline is only mentioned as a potential drug for interaction studies. |
| popPK | Siddiqui_2024 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic experiment measuring bronchodilatory effects (smooth muscle relaxation) using theophylline as a positive control, reporting no pharmacokinetic disposition parameters. |
| popPK | Sugimoto_2001 | irrelevant | 0 | 0 | The study investigates the mechanism of action (GABA receptor inhibition) of theophylline in vitro, not its pharmacokinetics or disposition parameters. |
| popPK | Thomson_1992 | irrelevant | 1 | 0 | The text is a general review of Bayesian parameter estimation methods and mentions theophylline only as a drug class where the technique is applied, providing no quantitative disposition parameters or specific study data. |
| popPK | Tornøe_2004 | irrelevant | 2 | 0 | This is a software/methodology paper illustrating the use of an R package with theophylline data, but no specific numeric PK parameters are provided in the evidence. |
| popPK | Tse_1982 | relevant | 8 | 2 | The paper reports a one-compartment PK model for theophylline in dogs, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Yalcin_2022 | irrelevant | 1 | 0 | The paper is a systematic review of ECMO's effect on drug PK in neonates; while theophylline is listed as a drug included in the search, no specific quantitative PK parameters for theophylline are reported in the provided text (it is only mentioned in the abstract and drug list). |
| popPK | Świerczek_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of "compound 34," a novel theophylline derivative and PDE4/7 inhibitor, rather than theophylline itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:15 UTC</sub>

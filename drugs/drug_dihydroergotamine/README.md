<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;dihydroergotamine&quot;}]"></div>

# dihydroergotamine

- **generic name:** dihydroergotamine
- **ATC codes:** `N02CA01`
- **DrugBank:** [DB00320](https://go.drugbank.com/drugs/DB00320) · **PubChem:** [CID 10531](https://pubchem.ncbi.nlm.nih.gov/compound/10531)
- **molar mass:** 583.6774 g/mol (C33H37N5O5) — DrugBank
- **groups:** approved

## About

Dihydroergotamine is an ergot alkaloid used to treat migraine and orthostatic hypotension. It is an approved medicine, though it carries a boxed warning, so its use requires caution.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421336](https://www.wikidata.org/wiki/Q421336) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dihydroergotamine | parent | 583.677 | C33H37N5O5 | DrugBank | [10531](https://pubchem.ncbi.nlm.nih.gov/compound/10531) | Schran_1985 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:27 | 1:46 | 0/0/2 | 0/0/0 | 0/0/0 | 149,693/8,219 | einfracz / qwen3.8-27b | 6 | 4/2 | 5/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.778). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q61 — no SI value to build from</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Hilke_1978_reference](drugs/drug_dihydroergotamine/Dihydroergotamine_Hilke1978_reference.md) | — | 1-compartment (no model) | 4 | Hilke H et al., Dihydroergotamine: pharmacokinetics and…, Acta anaesthesiologica Scan… (1978) | [10.1111/aas.1978.22.3.215](https://doi.org/10.1111/aas.1978.22.3.215) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Schran_1985_reference](drugs/drug_dihydroergotamine/Dihydroergotamine_Schran1985_reference.md) | — | 1-compartment (no model) | 3 | Schran HF et al., Pharmacokinetics of dihydroergotamine f…, International journal of cl… (1985) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dihydroergotamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), ADRB3 (target), DRD2 (target), DRD3 (target), DRD4 (target), HTR1A (target), HTR1B (target), HTR1D (target), HTR1E (target), HTR1F (target), HTR2A (target), HTR2B (target), HTR2C (target), HTR4 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 36 matched, 29 returned
- **screened:** 5  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hilke_1978.pdf` | Hilke H et al., Dihydroergotamine: pharmacokinetics and…, Acta anaesthesiologica Scan… (1978) | popPK | 10 | [10.1111/aas.1978.22.3.215](https://doi.org/10.1111/aas.1978.22.3.215) | [354304](https://pubmed.ncbi.nlm.nih.gov/354304) | The text explicitly reports quantitative pharmacokinetic parameters (alpha and beta half-lives, volume of distribution, and clearance) for dihydroergotamine in humans. |
| `Schran_1985.pdf` | Schran HF et al., Pharmacokinetics of dihydroergotamine f…, International journal of cl… (1985) | popPK | 10 | not captured | [3988387](https://pubmed.ncbi.nlm.nih.gov/3988387) | The study reports quantitative compartmental PK parameters (half-lives, Vd, CL, renal CL) for dihydroergotamine in humans directly in the text. |
| `Kitazawa_1998.pdf` | Kitazawa T et al., Involvement of 5-hydroxytryptamine7 rec…, British journal of pharmaco… (1998) | pd | 4 | [10.1038/sj.bjp.0701583](https://doi.org/10.1038/sj.bjp.0701583) | [9489604](https://www.ncbi.nlm.nih.gov/pubmed/9489604) | metadata signals extractable PD data (EC50) |
| `Albrecht_2026.pdf` | Albrecht D et al., An Open-Label, 2-Period, Fixed Sequence…, Journal of clinical pharmac… (2026) | pgx | 7 | [10.1002/jcph.70239](https://doi.org/10.1002/jcph.70239) | [42530156](https://www.ncbi.nlm.nih.gov/pubmed/42530156) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Fung_2000.pdf` | Fung HB et al., Amprenavir: a new human immunodeficienc…, Clinical therapeutics (2000) | pgx | 7 | [10.1016/S0149-2918(00)80044-2](https://doi.org/10.1016/S0149-2918(00)80044-2) | [10868554](https://www.ncbi.nlm.nih.gov/pubmed/10868554) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Nakasa_1998.pdf` | Nakasa H et al., Prediction of drug-drug interactions of…, European journal of clinica… (1998) | pgx | 7 | [10.1007/s002280050442](https://doi.org/10.1007/s002280050442) | [9626925](https://www.ncbi.nlm.nih.gov/pubmed/9626925) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |

<sub>queue written 2026-10-07T06:26:09.106843+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Albrecht_2026 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (DHE with itraconazole) rather than a pharmacogenomic effect (gene variant/genotype) on PK or PD. |
| popPK | Assié_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological analysis of receptor affinity and intrinsic activity, not a pharmacokinetic study reporting disposition parameters. |
| PD | Assié_1999 | not_relevant | 1 | 0 | The paper discusses receptor binding affinities and qualitative intrinsic activity (Emax) comparisons but does not provide numeric concentration-effect curves or specific PD parameters for dihydroergotamine. |
| PGx | Ball_1992 | not_relevant | 0 | 0 | The paper characterizes CYP3A4 metabolism of a different ergot alkaloid (CQA 206-291) and does not report pharmacogenomic effects on the PK or PD of dihydroergotamine. |
| PGx | Fung_2000 | not_relevant | 0 | 0 | The paper is a review of amprenavir and only mentions dihydroergotamine as a contraindication; it does not report any pharmacogenomic effects on its PK or PD. |
| popPK | Hanoun_2003 | irrelevant | 0 | 0 | This is a mechanistic in vitro pharmacology study of receptor binding and electrophysiology, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Inoue_2003 | irrelevant | 0 | 0 | This is a pharmacological study on 5-HT7 receptor-mediated oviduct relaxation in pigs where dihydroergotamine is used only as a less effective antagonist/probe, not for PK parameter estimation. |
| PD | Inoue_2003 | not_relevant | 1 | 0 | The paper investigates 5-HT receptor pharmacology in porcine oviducts; dihydroergotamine is only mentioned qualitatively as a less effective agonist without providing specific numeric PD parameters or concentration-effect curves for it. |
| PGx | Kellerman_2012 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction with a CYP3A4 inhibitor, not the effect of a genetic variant, genotype, or phenotype. |
| popPK | Kitazawa_1998 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study on porcine myometrium where dihydroergotamine is used only as a comparative antagonist/agonist to characterize 5-HT receptors, not for pharmacokinetic analysis. |
| PD | Kitazawa_1998 | not_relevant | 0 | 0 | The paper reports that dihydroergotamine had "almost no effect" on myometrial contractility at tested concentrations, providing no numeric PD parameters or concentration-effect curve for the drug. |
| popPK | MaassenVanDenBrink_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of coronary artery contraction (measuring EC50 and Emax), not a pharmacokinetic study reporting quantitative disposition parameters like clearance, volume of distribution, or half-life. |
| popPK | McConnachie_2023 | irrelevant | 0 | 0 | The paper reports in-vitro receptor binding and functional pharmacology parameters (IC50, EC50) for dihydroergotamine, not pharmacokinetic disposition parameters. |
| popPK | Mlinar_2003 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of serotonin receptors in rat hippocampus where dihydroergotamine is used only as a receptor antagonist, with no pharmacokinetic data reported. |
| PD | Mlinar_2003 | not_relevant | 0 | 0 | The paper reports EC50 values for other 5-HT1B agonists (CP 93129, 5-CT, methylergometrine) but only mentions dihydroergotamine as a non-selective antagonist used to block effects, without providing any dose-response curve or numeric PD parameters for dihydroergotamine itself. |
| PGx | Moubarak_2003 | not_relevant | 0 | 0 | The study investigates drug-drug interactions involving CYP3A4 in rats but does not report any pharmacogenomic effects (gene variants/genotypes) on the pharmacokinetics or pharmacodynamics of dihydroergotamine. |
| PGx | Nakasa_1998 | not_relevant | 0 | 0 | The paper focuses on the metabolism of zonisamide and drug-drug interactions, mentioning dihydroergotamine only as a CYP3A4 substrate/inhibitor, but does not report the pharmacokinetics or pharmacodynamics of dihydroergotamine itself. |
| PGx | Rasmussen_1998 | not_relevant | 0 | 0 | The study focuses on the interaction between fluvoxamine and proguanil mediated by CYP2C19, and does not report pharmacogenomic effects on dihydroergotamine's PK or PD. |
| popPK | Roon_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay measuring receptor-mediated contractile potency (pD2/Emax), not pharmacokinetic disposition parameters. |
| PGx | Rosenkrans_2015 | not_relevant | 0 | 0 | The paper studies CYP450 inhibition by ergot alkaloids in cattle, not human pharmacogenomics of dihydroergotamine. |
| popPK | Sampson_1977 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic study where dihydroergotamine is used as a pharmacological antagonist to block adrenergic effects, not as the subject of pharmacokinetic analysis. |
| popPK | Valentin_1998 | irrelevant | 0 | 0 | The study is an in vitro pharmacological analysis of contractile responses and receptor potency (pD2), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | de_1986 | irrelevant | 0 | 0 | The study focuses on hemodynamic effects (venoconstriction) and qualitative concentration profile comparisons, but does not report quantitative pharmacokinetic parameters (CL, V, t1/2, ka) or a PK model for dihydroergotamine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:26 UTC</sub>

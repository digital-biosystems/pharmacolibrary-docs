<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02D&quot;,&quot;href&quot;:&quot;atc/C02D.md&quot;},{&quot;label&quot;:&quot;pinacidil&quot;}]"></div>

# pinacidil

- **generic name:** pinacidil
- **ATC codes:** `C02DG01`, `C02LX01`
- **DrugBank:** [DB06762](https://go.drugbank.com/drugs/DB06762) · **PubChem:** not captured
- **molar mass:** 245.33 g/mol (C13H19N5) — DrugBank
- **groups:** approved

## About

Pinacidil is an antihypertensive vasodilator used to lower high blood pressure. It is classed as an approved drug, but it does not appear to be an established, widely marketed medicine today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q821869](https://www.wikidata.org/wiki/Q821869) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 14:01 | 12:07 | 0/1/0 | 1/0/0 | 0/0/0 | 135,466/9,940 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 3/2 | 4/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Nielsen_1989_reference](drugs/drug_pinacidil/Pinacidil_Nielsen1989_reference.md) | — | 1-compartment (no model) | 0 | Nielsen CB et al., Pinacidil uptake and effects in the iso…, Pharmacology & toxicology (1989) | [10.1111/j.1600-0773.1989.tb00592.x](https://doi.org/10.1111/j.1600-0773.1989.tb00592.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Girard_1993_delta_HR](drugs/drug_pinacidil/pd_Girard_1993_delta_HR.md) | delta HR ← pinacidil · delayed effect through an effect compartment | — | Girard P et al., Pharmacodynamic model of the haemodynam…, European journal of clinica… (1993) | [10.1007/BF00315477](https://doi.org/10.1007/BF00315477) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Girard_1993_delta_DBP](drugs/drug_pinacidil/pd_Girard_1993_delta_DBP.md) | delta DBP ← pinacidil · direct sigmoid Emax (Hill) effect | — | Girard P et al., Pharmacodynamic model of the haemodynam…, European journal of clinica… (1993) | [10.1007/BF00315477](https://doi.org/10.1007/BF00315477) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pinacidil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 247 matched, 81 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Girard_1993.pdf` | Girard P et al., Pharmacodynamic model of the haemodynam…, European journal of clinica… (1993) | popPK | 8 | [10.1007/BF00315477](https://doi.org/10.1007/BF00315477) | [8453963](https://pubmed.ncbi.nlm.nih.gov/8453963) | The study reports a pharmacokinetic model (biexponential with zero-order input) for pinacidil in humans, but specific numeric PK parameters (CL, V, ka) are not listed in the evidence, only PD parameters (EC50, Emax). |
| `Nielsen_1989.pdf` | Nielsen CB et al., Pinacidil uptake and effects in the iso…, Pharmacology & toxicology (1989) | popPK | 8 | [10.1111/j.1600-0773.1989.tb00592.x](https://doi.org/10.1111/j.1600-0773.1989.tb00592.x) | [2755905](https://pubmed.ncbi.nlm.nih.gov/2755905) | The study reports quantitative compartmental kinetics (half-times, distribution percentages) for pinacidil in an isolated rabbit heart model. |
| `Bellissant_1994.pdf` | Bellissant E et al., Pharmacokinetic-pharmacodynamic modelin…, Fundamental & clinical phar… (1994) | pd | 5 | [10.1111/j.1472-8206.1994.tb00823.x](https://doi.org/10.1111/j.1472-8206.1994.tb00823.x) | [7875638](https://www.ncbi.nlm.nih.gov/pubmed/7875638) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Wanstall_1992.pdf` | Wanstall JC et al., Responses to vasodilator drugs on pulmo…, British journal of pharmaco… (1992) | pd | 4 | [10.1111/j.1476-5381.1992.tb14227.x](https://doi.org/10.1111/j.1476-5381.1992.tb14227.x) | [1596677](https://www.ncbi.nlm.nih.gov/pubmed/1596677) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T13:57:32.067522+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akao_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of apoptosis in cardiac cells using pinacidil as a pharmacological tool, not a pharmacokinetic study. |
| PGx | Ayesh_1989 | not_relevant | 2 | 5 | The paper reports a lack of correlation between pinacidil metabolism and specific genetic polymorphisms (debrisoquine/trimethylamine), concluding that the variability is likely due to P-450 isozymes rather than the tested genes, thus it does not report a positive pharmacogenomic effect. |
| popPK | Barrett-Jolley_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological characterization of K(ATP) channels in rat skeletal muscle, reporting pharmacological potency (EC50) rather than pharmacokinetic disposition parameters. |
| popPK | Bellissant_1994 | irrelevant | 0 | 0 | no_text gate: only 161 chars of text extracted (&lt; 400) |
| PGx | Bessadok_2011 | not_relevant | 0 | 0 | The paper investigates the interaction of pinacidil analogs with P-glycoprotein in vitro but does not report pharmacogenomic effects on PK or PD parameters in humans. |
| popPK | Chen_2003 | irrelevant | 0 | 0 | The paper is an electrophysiological study of ion channels in rat astrocytes where pinacidil is used only as a pharmacological probe to test channel sensitivity, not as a subject for pharmacokinetic analysis. |
| popPK | Gando_2023 | irrelevant | 0 | 0 | The paper is a mechanistic study of a new KATP channel opener (CL-705G) and does not report pharmacokinetic parameters for pinacidil. |
| popPK | Gantenbein_1996 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic interaction between pinacidil and bupivacaine in mice, reporting no pharmacokinetic parameters for pinacidil. |
| popPK | Girard_1993 | relevant | 8 | 2 | The study reports a pharmacokinetic model (biexponential with zero-order input) for pinacidil in humans, but specific numeric PK parameters (CL, V, ka) are not listed in the evidence, only PD parameters (EC50, Emax). |
| popPK | Gomes_2003 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of dopamine receptor mechanisms in opossum kidney cells, using pinacidil only as a tool compound to characterize K+ channels, and reports no pharmacokinetic parameters. |
| popPK | Gopalakrishnan_1999 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological characterization of KATP channels in guinea pig bladder smooth muscle, not a pharmacokinetic study of pinacidil. |
| popPK | Gündüz_2008 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological evaluation of myorelaxant activity and does not report pharmacokinetic parameters for pinacidil. |
| popPK | Humphrey_1996 | irrelevant | 0 | 0 | The study focuses on the cardiovascular pharmacodynamics of K-ATP channel blockers, with pinacidil used only as a reference compound in an in-vitro assay, and no pharmacokinetic parameters are reported. |
| popPK | Imig_2012 | irrelevant | 0 | 0 | Pinacidil is used as a pharmacological tool (KATP channel opener) to assess vascular function in an in-vitro myograph assay, not as the subject of a pharmacokinetic study. |
| popPK | Katakam_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular relaxation mechanisms using pinacidil as a tool compound, not a pharmacokinetic study. |
| popPK | Khanam_2006 | irrelevant | 0 | 0 | The study is a pharmacodynamic/mechanistic investigation of sertraline's hypoglycemic effects using pinacidil as a tool compound, with no pharmacokinetic parameters reported. |
| popPK | Kirsch_2000 | irrelevant | 0 | 0 | The study is a mechanistic investigation of vascular endothelial function in rabbits, not a pharmacokinetic study, and reports no disposition parameters for pinacidil. |
| popPK | Kopustinskiene_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial potassium flux where pinacidil is used only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Kopustinskiene_2004 | not_relevant | 1 | 0 | The paper reports a single-point effect for pinacidil (0.08%/s at 50 microM) but does not provide a dose-response curve, EC50, or other numeric PD parameters for pinacidil; the EC50 reported is for levosimendan. |
| popPK | Liang_2011 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology and vascular physiology investigation using pinacidil as a tool compound to characterize KATP channels, not a pharmacokinetic study. |
| popPK | Manley_2001 | irrelevant | 0 | 0 | The study is an in-vitro radioligand binding and synthesis paper for a KATP channel opener, not a pharmacokinetic study of pinacidil. |
| popPK | Mitsuyama_2013 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of K_ATP channel mechanisms in rat myocytes, not a pharmacokinetic study reporting disposition parameters for pinacidil. |
| popPK | Nielsen-Kudsk_1988 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of pinacidil's mechanism of action on guinea-pig airway smooth muscle, reporting EC50 values rather than pharmacokinetic disposition parameters. |
| popPK | Nielsen-Kudsk_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle relaxation and does not report any pharmacokinetic parameters. |
| popPK | Nielsen-Kudsk_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle relaxation mechanisms, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Nnorom_2014 | not_relevant | 0 | 0 | The paper investigates the physiological role of KATP and KCa channels in neonatal cerebral arteriolar dilation to hypercapnia in pigs and does not report any pharmacogenomic effects on the PK or PD of pinacidil. |
| popPK | Reimann_2000 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of K(ATP) channel mechanisms in Xenopus oocytes, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Russ_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of KATP channel binding and electrophysiology in A10 cells, reporting no pharmacokinetic parameters (CL, V, t1/2) for pinacidil. |
| popPK | Ryman_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of pinacidil's effect on arterial contraction, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Secrest_1989 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor mechanisms and relaxation potency in rat stomach fundus, not a pharmacokinetic study reporting disposition parameters for pinacidil. |
| PGx | Shaheen_1986 | not_relevant | 0 | 0 | The study explicitly concludes that pinacidil's metabolism and clearance are independent of debrisoquin phenotype, reporting no pharmacogenomic effect. |
| popPK | Smallwood_1988 | irrelevant | 0 | 0 | The study investigates cardiac electrophysiological effects (action potential duration) and antihypertensive activity, not pharmacokinetic disposition parameters. |
| popPK | Tabrizchi_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of osmotic pressure effects on rat aorta, using pinacidil only as a mechanistic probe, and reports no pharmacokinetic parameters. |
| popPK | Takács_2003 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological analysis of azimilide in canine cardiac preparations, where pinacidil is used only as a comparator agent, and no pharmacokinetic parameters are reported. |
| PGx | Ueda_2004 | not_relevant | 0 | 0 | The paper investigates the effect of hypothermia and rewarming rates on cerebrovascular responsiveness to pinacidil, not the effect of genetic variants on pinacidil pharmacokinetics or pharmacodynamics. |
| popPK | Vijayakumar_2007 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of KATP channel openers on goat detrusor muscle, reporting IC50/EC50 values for contractile responses rather than pharmacokinetic disposition parameters. |
| popPK | Voitychuk_2011 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic and electrophysiological effects of flocalin (a pinacidil analogue) on cardiac channels and myocytes, not the pharmacokinetic disposition parameters of pinacidil. |
| popPK | Wanstall_1992 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| PD | Wanstall_1992 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| popPK | Wanstall_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular relaxation in rat pulmonary arteries, not a pharmacokinetic study of pinacidil. |
| popPK | Wanstall_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vasorelaxant effects (EC50, maximum relaxation) in isolated rat tissues, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Yang_2014 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of K_ATP channel modulation by methylglyoxal, using pinacidil only as a positive control agent, and reports no pharmacokinetic parameters. |
| popPK | Yeung_2007 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological profiling of potassium channel openers on rat myocytes and does not report pharmacokinetic parameters for pinacidil. |
| PGx | Zhang_2002 | not_relevant | 0 | 0 | The paper describes the metabolic mechanism of pinacidil by CYP3A4 in vitro but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Zimmermann_1997 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular reactivity and reports EC50 values for pinacidil, not pharmacokinetic disposition parameters (CL, V, t1/2). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 13:57 UTC</sub>

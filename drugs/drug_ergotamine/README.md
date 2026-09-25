<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;ergotamine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ergotamine_TfeltHansen1985_reference&quot;,&quot;label&quot;:&quot;Tfelt-Hansen_1985_reference&quot;,&quot;href&quot;:&quot;drugs/drug_ergotamine/Ergotamine_TfeltHansen1985_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# ergotamine

- **generic name:** ergotamine
- **ATC codes:** `N02CA02`
- **DrugBank:** [DB00696](https://go.drugbank.com/drugs/DB00696)
- **groups:** approved

## About

**Description.** A vasoconstrictor found in ergot of Central Europe. It is an alpha-1 selective adrenergic agonist and is commonly used in the treatment of migraine disorders.

**Indication.** For use as therapy to abort or prevent vascular headache, e.g., migraine, migraine variants, or so called "histaminic cephalalgia".

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 05:09 | 9:13 | 0/1/0 | 0/4/0 | 0/0/0 | 225,363/14,915 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Tfelt-Hansen_1985_reference](drugs/drug_ergotamine/Ergotamine_TfeltHansen1985_reference.md) | Tfelt-Hansen P et al., Intramuscular ergotamine: plasma levels…, Clinical pharmacology and t… (1985) | [10.1038/clpt.1985.7](https://doi.org/10.1038/clpt.1985.7) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Kudupoje_2018](drugs/drug_ergotamine/pd_Kudupoje_2018_norepinephrine_normalized_percent_contractile_.md) | Kudupoje MB et al., Contractile Response of Bovine Lateral…, Toxins (2018) | [10.3390/toxins10020058](https://doi.org/10.3390/toxins10020058) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [MaassenVanDenBrink_1998](drugs/drug_ergotamine/pd_MaassenVanDenBrink_1998_unknown.md) | MaassenVanDenBrink A et al., Coronary side-effect potential of curre…, Circulation (1998) | [10.1161/01.cir.98.1.25](https://doi.org/10.1161/01.cir.98.1.25) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Rosenkranz_2008](drugs/drug_ergotamine/pd_Rosenkranz_2008_DNA_fragmentation.md) | Rosenkranz V et al., Alkaloids induce programmed cell death…, Molecules (Basel, Switzerla… (2008) | [10.3390/molecules13102462](https://doi.org/10.3390/molecules13102462) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Rosenkranz_2008](drugs/drug_ergotamine/pd_Rosenkranz_2008_mitochondrial_membrane_potential.md) | Rosenkranz V et al., Alkaloids induce programmed cell death…, Molecules (Basel, Switzerla… (2008) | [10.3390/molecules13102462](https://doi.org/10.3390/molecules13102462) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Yonpiam_2021](drugs/drug_ergotamine/pd_Yonpiam_2021_unknown.md) | Yonpiam R et al., Vasoactive Effects of Acute Ergot Expos…, Toxins (2021) | [10.3390/toxins13040291](https://doi.org/10.3390/toxins13040291) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ergotamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| metabolism | bile duct | <sub>“…ed pathways, and 90% of the metabolites are excreted in the bile.…”</sub> | prose |
| metabolism | liver | `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (partial agonist), ADRA1B (partial agonist), ADRA1D (partial agonist), ADRA2A (partial agonist), ADRA2C (unknown), DRD1 (target), DRD2 (target), HTR1A (target), HTR1B (target), HTR1D (target), HTR1F (target), HTR2A (target), HTR2B (unknown), HTR2C (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 41 matched, 31 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tfelt-Hansen_1985.pdf` | Tfelt-Hansen P et al., Intramuscular ergotamine: plasma levels…, Clinical pharmacology and t… (1985) | popPK | 9 | [10.1038/clpt.1985.7](https://doi.org/10.1038/clpt.1985.7) | [3917386](https://pubmed.ncbi.nlm.nih.gov/3917386) | The paper reports quantitative pharmacokinetic parameters (absorption half-life, biological half-life, equilibration rate constant) for ergotamine in humans, with values explicitly stated in the text. |
| `Misra_2026.pdf` | Misra A et al., Pharmacology and Pharmacogenomics of An…, CNS & neurological disorder… (2026) | pgx | 8 | [10.2174/0118715273402957251210064344](https://doi.org/10.2174/0118715273402957251210064344) | [41833043](https://www.ncbi.nlm.nih.gov/pubmed/41833043) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Bailey_2004.pdf` | Bailey DG et al., Interactions between grapefruit juice a…, American journal of cardiov… (2004) | pgx | 7 | [10.2165/00129784-200404050-00002](https://doi.org/10.2165/00129784-200404050-00002) | [15449971](https://www.ncbi.nlm.nih.gov/pubmed/15449971) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Buchan_2002.pdf` | Buchan P et al., Frovatriptan: a review of drug-drug int…, Headache (2002) | pgx | 7 | [10.1046/j.1526-4610.42.s2.4.x](https://doi.org/10.1046/j.1526-4610.42.s2.4.x) | [12028322](https://www.ncbi.nlm.nih.gov/pubmed/12028322) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Dresser_2000.pdf` | Dresser GK et al., Pharmacokinetic-pharmacodynamic consequ…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200038010-00003](https://doi.org/10.2165/00003088-200038010-00003) | [10668858](https://www.ncbi.nlm.nih.gov/pubmed/10668858) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Fung_2000.pdf` | Fung HB et al., Amprenavir: a new human immunodeficienc…, Clinical therapeutics (2000) | pgx | 7 | [10.1016/S0149-2918(00)80044-2](https://doi.org/10.1016/S0149-2918(00)80044-2) | [10868554](https://www.ncbi.nlm.nih.gov/pubmed/10868554) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-21T05:00:50.048629+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ahmad_2025 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (CYP3A4 inhibition by ritonavir) causing ergotism, not a pharmacogenomic effect based on a specific gene variant or genotype. |
| PGx | Avihingsanon_2014 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (CYP3A4 inhibition) causing toxicity, not pharmacogenomic effects of genetic variants on PK/PD parameters. |
| PGx | Bailey_2004 | not_relevant | 0 | 0 | The paper discusses a drug-food interaction (grapefruit juice) affecting ergotamine, not a pharmacogenomic effect (gene variant/genotype). |
| popPK | Bax_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor-mediated contractions in isolated human coronary arteries, not a pharmacokinetic study, and reports no disposition parameters for ergotamine. |
| PGx | Buchan_2002 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions for frovatriptan and does not report pharmacogenomic effects on ergotamine. |
| PGx | Christensen_2016 | not_relevant | 2 | 5 | The study reports associations between genetic variants and clinical drug response (efficacy/success), not specific pharmacokinetic (PK) or pharmacodynamic (PD) parameters like AUC, Cmax, or receptor binding affinity. |
| PGx | Coufal-Majewski_2016 | not_relevant | 0 | 0 | The paper discusses the toxicology and contamination of ergot alkaloids in animal feed, not the pharmacogenomics of ergotamine as a therapeutic drug. |
| popPK | Dresser_2000 | irrelevant | 0 | 0 | The paper is a review of CYP3A4 drug interactions that mentions ergotamine only as an example of a drug causing ergotism, without reporting any quantitative pharmacokinetic parameters for ergotamine. |
| PD | Dresser_2000 | not_relevant | 1 | 0 | The text is a general review of CYP3A4 drug interactions that mentions ergotamine only qualitatively in the context of adverse effects (ergotism) without providing any specific pharmacokinetic data, concentration-effect curves, or numeric PD parameters. |
| PGx | Dresser_2000 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving CYP3A4 inhibitors and ergotamine, not pharmacogenomic effects of gene variants on ergotamine PK/PD. |
| PGx | Fung_2000 | not_relevant | 0 | 0 | The paper reviews amprenavir and mentions ergotamine only as a contraindicated drug interaction, without reporting any pharmacogenomic effects on ergotamine's PK or PD. |
| popPK | Inoue_2003 | irrelevant | 0 | 0 | The study is a pharmacological investigation of 5-HT7 receptor-mediated relaxation in porcine oviducts, where ergotamine is used only as a comparative agonist, and no pharmacokinetic parameters are reported. |
| PD | Inoue_2003 | not_relevant | 0 | 0 | The paper investigates 5-HT receptor pharmacology in porcine oviducts and only qualitatively mentions ergotamine as a less effective agonist without providing any numeric PD parameters or concentration-effect data for it. |
| popPK | Kudupoje_2018 | irrelevant | 0 | 0 | The study is an ex vivo myography and in vitro adsorption experiment evaluating the vasoconstrictive effects of ergotamine, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Larson_1999 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and mechanistic assay, not a pharmacokinetic study, and reports no disposition parameters for ergotamine. |
| popPK | MaassenVanDenBrink_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of coronary artery contraction (EC50/Emax) and does not report pharmacokinetic disposition parameters (CL, V, ka, t1/2) for ergotamine. |
| PGx | Misra_2026 | not_relevant | 5 | 2 | The text is a review summary that mentions associations (e.g., TSPAN2, CYP3A4) but does not report specific fitted effect sizes or detailed quantitative PK/PD parameters for ergotamine. |
| PGx | Moubarak_2003 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (modulation of CYP3A4 by ergonovine/dihydroergotamine) in rats, not the effect of a human gene variant or genotype on ergotamine pharmacokinetics or pharmacodynamics. |
| PGx | Mulac_2012 | not_relevant | 0 | 0 | The paper investigates the permeability of ergot alkaloids across the blood-brain barrier in an in vitro model and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Rosenkrans_2015 | not_relevant | 2 | 5 | The paper reports a pharmacogenomic effect on CYP450 enzyme activity (a mechanism), not on a pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic (e.g., blood pressure, growth rate) parameter of ergotamine. |
| popPK | Rosenkranz_2008 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on programmed cell death in trypanosomes and leukemia cells, reporting cytotoxicity (EC50) rather than pharmacokinetic disposition parameters for ergotamine. |
| PGx | Srisuma_2014 | not_relevant | 0 | 0 | The paper describes drug-drug interactions with CYP3A4 inhibitors, not pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| popPK | Walkembach_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor interactions and does not report pharmacokinetic disposition parameters for ergotamine. |
| popPK | Yonpiam_2021 | irrelevant | 0 | 0 | The study focuses on the vasoactive and pharmacodynamic effects of ergot alkaloids on sheep arteries, not on pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-21 05:00 UTC</sub>

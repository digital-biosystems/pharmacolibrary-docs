<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;nicardipine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nicardipine_Modi1993_reference&quot;,&quot;label&quot;:&quot;Modi_1993_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nicardipine/Nicardipine_Modi1993_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# nicardipine

- **generic name:** nicardipine
- **ATC codes:** `C08CA04`
- **DrugBank:** [DB00622](https://go.drugbank.com/drugs/DB00622) · **PubChem:** [CID 4474](https://pubchem.ncbi.nlm.nih.gov/compound/4474)
- **molar mass:** 479.525 g/mol (C26H29N3O6) — DrugBank
- **groups:** approved, investigational

## About

**Description.** A potent calcium channel blockader with marked vasodilator action. It has antihypertensive properties and is effective in the treatment of angina and coronary spasms without showing cardiodepressant effects. It has also been used in the treatment of asthma and enhances the action of specific antineoplastic agents. [PubChem]

**Indication.** Used for the management of patients with chronic stable angina and for the treatment of hypertension.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nicardipine | parent | 479.525 | C26H29N3O6 | DrugBank | [4474](https://pubchem.ncbi.nlm.nih.gov/compound/4474) | Guerret_1989, Modi_1993, Sadan_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 10:12 | 34:53 | 1/1/1 | 1/0/0 | 0/0/0 | 152,466/21,788 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 3/6 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span> | [Modi_1993_reference](drugs/drug_nicardipine/Nicardipine_Modi1993_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Modi NB et al., Application of a system analysis approa…, Journal of pharmaceutical s… (1993) | [10.1002/jps.2600820707](https://doi.org/10.1002/jps.2600820707) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.182). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Guerret_1989_reference](drugs/drug_nicardipine/Nicardipine_Guerret1989_reference.md) | — | 1-compartment (no model) | 2 | Guerret M et al., Simultaneous study of the pharmacokinet…, European journal of clinica… (1989) | [10.1007/BF00558504](https://doi.org/10.1007/BF00558504) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.778). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Sadan_2023_reference](drugs/drug_nicardipine/Nicardipine_Sadan2023_reference.md) | — | 2-compartment (no model) | 5 | Sadan O et al., Cerebrospinal Fluid Pharmacokinetics of…, medRxiv : the preprint serv… (2023) | [10.1101/2023.10.17.23297116](https://doi.org/10.1101/2023.10.17.23297116) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [Kim_2019_frequency_of_contraction](drugs/drug_nicardipine/pd_Kim_2019_frequency_of_contraction.md) | frequency of contraction ← nicardipine · direct log-linear effect | — | Kim DJ et al., The relaxant effect of nicardipine on t…, Anesthesia and pain medicine (2019) | [10.17085/apm.2019.14.4.429](https://doi.org/10.17085/apm.2019.14.4.429) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [Kim_2019_g](drugs/drug_nicardipine/pd_Kim_2019_g.md) | active tension ← nicardipine · direct log-linear effect | — | Kim DJ et al., The relaxant effect of nicardipine on t…, Anesthesia and pain medicine (2019) | [10.17085/apm.2019.14.4.429](https://doi.org/10.17085/apm.2019.14.4.429) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nicardipine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer, `CYP2C19` inhibitor, `CYP2C8` inhibitor/substrate, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP2E1` substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA1D (target), CACNA1C (inhibitor), CACNA1D (inhibitor), CACNA1G (inhibitor), CACNA1H (inhibitor), CACNA1I (inhibitor), CACNA2D1 (inhibitor), CACNB2 (inhibitor), CACNG1 (inhibitor), CALM1 (other/unknown), CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target), PDE1A (inhibitor), PDE1B (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 183 matched, 60 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_16 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Guerret_1989.pdf` | Guerret M et al., Simultaneous study of the pharmacokinet…, European journal of clinica… (1989) | popPK | 10 | [10.1007/BF00558504](https://doi.org/10.1007/BF00558504) | [2598970](https://pubmed.ncbi.nlm.nih.gov/2598970) | The study reports quantitative PK parameters (CL, Vd, t1/2) for nicardipine in humans, with specific numeric values provided in the text. |
| `Modi_1993.pdf` | Modi NB et al., Application of a system analysis approa…, Journal of pharmaceutical s… (1993) | popPK | 10 | [10.1002/jps.2600820707](https://doi.org/10.1002/jps.2600820707) | [8360844](https://pubmed.ncbi.nlm.nih.gov/8360844) | The abstract explicitly reports quantitative population PK parameters for nicardipine, including total body clearance (0.920 L/h/kg) and volume of distribution (0.275 L/kg). |
| `Sadan_2024.pdf` | Sadan O et al., Cerebrospinal Fluid Pharmacokinetics of…, Journal of clinical pharmac… (2024) | popPK | 10 | [10.1002/jcph.2488](https://doi.org/10.1002/jcph.2488) | [38923537](https://pubmed.ncbi.nlm.nih.gov/38923537) | The paper describes a population pharmacokinetic study of nicardipine, but the specific numeric parameter values are not present in the provided evidence. |
| `Shityakov_2013.pdf` | Shityakov S et al., Pharmacokinetic delivery and metabolizi…, TheScientificWorldJournal (2013) | popPK | 8 | [10.1155/2013/131358](https://doi.org/10.1155/2013/131358) | [24391458](https://pubmed.ncbi.nlm.nih.gov/24391458) | The paper describes a two-compartment PK model for nicardipine, but the provided evidence contains only the abstract and no specific numeric parameter values (CL, V, etc.). |
| `Silke_1986.pdf` | Silke B et al., Pharmacokinetic, haemodynamic and radio…, European journal of clinica… (1986) | popPK | 8 | [10.1007/BF00615954](https://doi.org/10.1007/BF00615954) | [3709609](https://pubmed.ncbi.nlm.nih.gov/3709609) | The study reports quantitative plasma clearance values (5-12 ml/min/kg) for nicardipine, although it explicitly states that limited data precluded formal compartmental analysis. |
| `Huber_1998.pdf` | Huber TB et al., Catecholamines modulate podocyte functi…, Journal of the American Soc… (1998) | pd | 5 | [10.1681/ASN.V93335](https://doi.org/10.1681/ASN.V93335) | [9513895](https://www.ncbi.nlm.nih.gov/pubmed/9513895) | metadata signals extractable PD data (EC50) |
| `Nielsen-Kudsk_1987.pdf` | Nielsen-Kudsk F et al., A comparative study of the pharmacodyna…, Pharmacology & toxicology (1987) | pd | 5 | [10.1111/j.1600-0773.1987.tb01732.x](https://doi.org/10.1111/j.1600-0773.1987.tb01732.x) | [3588513](https://www.ncbi.nlm.nih.gov/pubmed/3588513) | metadata signals extractable PD data (Emax) |
| `Candenas_1992.pdf` | Candenas ML et al., Effect of epithelium removal and of enk…, European journal of pharmac… (1992) | pd | 4 | [10.1016/0014-2999(92)90418-4](https://doi.org/10.1016/0014-2999(92)90418-4) | [1377128](https://www.ncbi.nlm.nih.gov/pubmed/1377128) | metadata signals extractable PD data (Emax) |
| `Hooper_2012.pdf` | Hooper DK et al., Risk of tacrolimus toxicity in CYP3A5 n…, Transplantation (2012) | pgx | 8 | [10.1097/TP.0b013e318247a6c7](https://doi.org/10.1097/TP.0b013e318247a6c7) | [22491658](https://www.ncbi.nlm.nih.gov/pubmed/22491658) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Liu_2023.pdf` | Liu YN et al., Effects of drug-drug interactions and C…, Archives of toxicology (2023) | pgx | 8 | [10.1007/s00204-023-03524-1](https://doi.org/10.1007/s00204-023-03524-1) | [37209178](https://www.ncbi.nlm.nih.gov/pubmed/37209178) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Chen_2024.pdf` | Chen D et al., Optimization of a sensitive and reliabl…, Pharmaceutical biology (2024) | pgx | 7 | [10.1080/13880209.2024.2425648](https://doi.org/10.1080/13880209.2024.2425648) | [39540617](https://www.ncbi.nlm.nih.gov/pubmed/39540617) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Lee_2024.pdf` | Lee JM et al., Physiologically Based Pharmacokinetic (…, Pharmaceutics (2024) | pgx | 7 | [10.3390/pharmaceutics16020280](https://doi.org/10.3390/pharmaceutics16020280) | [38399334](https://www.ncbi.nlm.nih.gov/pubmed/38399334) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Ma_2000.pdf` | Ma B et al., Drug interactions with calcium channel…, Drug metabolism and disposi… (2000) | pgx | 7 | not captured | [10640508](https://www.ncbi.nlm.nih.gov/pubmed/10640508) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `McConn_2004.pdf` | McConn DJ et al., Differences in the inhibition of cytoch…, Drug metabolism and disposi… (2004) | pgx | 7 | [10.1124/dmd.32.10.](https://doi.org/10.1124/dmd.32.10.) | [15377640](https://www.ncbi.nlm.nih.gov/pubmed/15377640) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Piao_2008.pdf` | Piao YJ et al., Effects of morin on the pharmacokinetic…, The Journal of pharmacy and… (2008) | pgx | 7 | [10.1211/jpp.60.5.0008](https://doi.org/10.1211/jpp.60.5.0008) | [18416939](https://www.ncbi.nlm.nih.gov/pubmed/18416939) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Rougée_2017.pdf` | Rougée LRA et al., The Impact of the Hepatocyte-to-Plasma…, Drug metabolism and disposi… (2017) | pgx | 7 | [10.1124/dmd.117.076331](https://doi.org/10.1124/dmd.117.076331) | [28679672](https://www.ncbi.nlm.nih.gov/pubmed/28679672) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |

<sub>queue written 2026-09-29T09:59:15.601487+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aronson_2008 | not_relevant | 0 | 0 | The paper compares the clinical efficacy and safety of clevidipine versus nicardipine and other agents, but does not report any pharmacogenomic effects or gene-variant interactions on PK/PD parameters. |
| popPK | Baan_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular contractility, not a pharmacokinetic study, and reports no disposition parameters for nicardipine. |
| PGx | Bernard_2014 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic drug-drug interaction between cyclosporine and calcium channel blockers, not a pharmacogenomic effect of a gene variant on nicardipine. |
| popPK | Cabrini_1997 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of bradykinin receptors in guinea-pig gallbladder where nicardipine is used only as a tool compound (L-type calcium channel blocker) and no pharmacokinetic parameters are reported. |
| PD | Cabrini_1997 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50, Emax) for des-Arg9-bradykinin, not nicardipine; nicardipine is only mentioned as a partial antagonist without specific dose-response data. |
| popPK | Candenas_1992 | irrelevant | 0 | 0 | no_text gate: only 144 chars of text extracted (&lt; 400) |
| PD | Candenas_1992 | not_relevant | 0 | 0 | The paper investigates the bronchoconstrictor response to endothelins, not nicardipine, and does not report any pharmacodynamic or exposure-response data for nicardipine. |
| PGx | Cao_2026 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (nicardipine inhibiting pazopanib metabolism) and does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Chai_2020 | not_relevant | 0 | 0 | The paper investigates P-gp transport of amyloid-beta and uses nicardipine as a P-gp inhibitor, but does not report pharmacogenomic effects on nicardipine's PK or PD parameters. |
| PGx | Chen_2024 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (nicardipine affecting almonertinib PK) and does not report any pharmacogenomic effects (gene variants) on nicardipine. |
| PGx | Cheong_2026 | not_relevant | 0 | 0 | The study characterizes an in vitro intestinal model and reports the effect of enzyme/transporter inhibitors on nicardipine permeability, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Choi_2009 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (resveratrol) on nicardipine PK, not a pharmacogenomic effect (gene variant/genotype). |
| PGx | Cobb_2018 | not_relevant | 0 | 0 | The paper discusses the therapeutic interchange of sodium nitroprusside with nicardipine due to cost issues and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Cobb_2018_2 | not_relevant | 0 | 0 | The paper is a review of therapeutic alternatives for sodium nitroprusside and does not discuss pharmacogenomics or genetic variants affecting nicardipine PK/PD. |
| PGx | Cordeanu_2017 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (rifampicin inducing CYP3A4) rather than a pharmacogenomic effect based on a specific gene variant or genotype. |
| PGx | Desai_2026 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions between nicardipine and lapatinib, not the effect of a gene variant on nicardipine's pharmacokinetics or pharmacodynamics. |
| popPK | Doret_2003 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of myometrial contractility and does not report any pharmacokinetic parameters for nicardipine. |
| popPK | Hirasawa_2003 | irrelevant | 0 | 0 | The study focuses on the neuropharmacological mechanism of nifedipine, with nicardipine mentioned only as a comparator agent, and contains no pharmacokinetic data. |
| PD | Hirasawa_2003 | not_relevant | 0 | 0 | The paper reports PD parameters for nifedipine, not nicardipine; nicardipine is only mentioned as a control that did not mimic the effect. |
| PGx | Hooper_2012 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect on the pharmacokinetics of tacrolimus (the victim drug), not nicardipine (the perpetrator drug). |
| popPK | Huber_1998 | irrelevant | 0 | 0 | The study is a mechanistic investigation of podocyte function where nicardipine is used only as a tool compound (L-type Ca2+ channel blocker) and no pharmacokinetic parameters are reported. |
| PD | Huber_1998 | not_relevant | 0 | 0 | The paper investigates catecholamine effects on podocytes; nicardipine is only used as a negative control to show lack of effect on noradrenaline-induced calcium increase, with no PD parameters reported for nicardipine. |
| PGx | Kaamini_2024 | not_relevant | 0 | 0 | The text is a letter to the editor advocating for personalized medicine and genetic screening but does not report specific pharmacogenomic effects or data for nicardipine. |
| PGx | Katoh_2000 | not_relevant | 0 | 0 | The study investigates the in vitro inhibitory effects of nicardipine on P-glycoprotein transport and does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| popPK | Kim_2019 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of uterine smooth muscle relaxation (reporting EC50/EC95) and does not provide pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| popPK | Ko_2016 | irrelevant | 0 | 0 | The study focuses on acute cerebral hemodynamic effects (ICP, CPP, CBF) rather than pharmacokinetic disposition parameters like clearance or volume of distribution. |
| PGx | Laurent-Kenesi_1993 | not_relevant | 0 | 0 | The paper reports that CYP2D6 genotype does not influence the pharmacokinetics or pharmacodynamics of nicardipine. |
| PGx | Lee_2024 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (CYP3A inhibition) using PBPK modeling, not a pharmacogenomic effect (gene variant/genotype) on nicardipine PK/PD. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of cerebral microcirculation and oxygenation, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for nicardipine. |
| PGx | Liu_2023 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of alectinib, not nicardipine; nicardipine is only used as an inhibitor to demonstrate drug-drug interactions. |
| PGx | Ma_2000 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions and CYP3A inhibition by nicardipine in vitro, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | McConn_2004 | not_relevant | 0 | 0 | The study characterizes in vitro CYP3A4/3A5 inhibition by nicardipine but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Muthiah_2017 | not_relevant | 0 | 0 | The paper discusses the PI3K inhibitor ZSTK474 and its interaction with efflux pumps, not the pharmacogenomics of nicardipine. |
| PGx | Nakamura_2005 | not_relevant | 0 | 0 | The paper investigates in vitro CYP metabolism and inhibition of nicardipine but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Naritomi_2001 | not_relevant | 0 | 0 | The paper focuses on in vitro-in vivo extrapolation (IVIVE) for hepatic clearance prediction and does not investigate the impact of genetic variants on nicardipine pharmacokinetics. |
| PGx | Neutel_1994 | not_relevant | 0 | 0 | The study compares the efficacy and safety of nicardipine versus nitroprusside in a general population without analyzing any genetic variants or pharmacogenomic factors. |
| popPK | Nielsen-Kudsk_1987 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PGx | Piao_2008 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (morin) in rats, not a pharmacogenomic effect (gene variant/genotype) on nicardipine PK/PD. |
| PGx | Porchet_1990 | not_relevant | 0 | 0 | The study compares two drugs in healthy subjects and explicitly states that the data does not confirm a proposed polymorphism, reporting no gene variant effects. |
| popPK | Prior_1999 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of renal vasodilation where nicardipine is used only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Prior_1999 | not_relevant | 0 | 0 | The paper investigates A2A adenosine receptor-mediated vasodilation; nicardipine is only used as a positive control for a non-specific inhibitory effect (ouabain) and no PD parameters for nicardipine are reported. |
| PGx | Roitberg_2008 | not_relevant | 0 | 0 | The paper compares the clinical efficacy and safety of nicardipine versus nitroprusside in a general neurosurgical population and does not report any pharmacogenomic analysis or gene-variant specific effects on PK/PD parameters. |
| PGx | Rougée_2017 | not_relevant | 0 | 0 | The paper investigates the effect of intracellular pH on in vitro enzyme kinetics and PBPK predictions, not the impact of genetic variants on nicardipine pharmacokinetics or pharmacodynamics. |
| popPK | Sadan_2024 | relevant | 10 | 0 | The paper describes a population pharmacokinetic study of nicardipine, but the specific numeric parameter values are not present in the provided evidence. |
| PGx | Sassi_2015 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic interaction between nicardipine and tacrolimus, not a pharmacogenomic effect on nicardipine's PK/PD parameters. |
| PGx | Satoh_2003 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (inhibition of estradiol metabolism by nicardipine) and does not report any pharmacogenomic effects (gene variants) on nicardipine's PK or PD parameters. |
| popPK | Shibasaki_1994 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of YM-21095, with nicardipine serving only as a comparator for cardiovascular effects without any PK parameter reporting. |
| popPK | Shityakov_2013 | relevant | 8 | 0 | The paper describes a two-compartment PK model for nicardipine, but the provided evidence contains only the abstract and no specific numeric parameter values (CL, V, etc.). |
| PGx | Shukla_2006 | not_relevant | 0 | 0 | The paper identifies nicardipine as a substrate/inhibitor of the ABCG2 transporter in vitro but does not report any pharmacogenomic analysis (gene variant/genotype) affecting its PK or PD parameters. |
| PGx | Tatosian_2009 | not_relevant | 0 | 0 | The paper describes an in vitro microfluidic system for testing drug combinations in cancer cells and does not report any pharmacogenomic effects on nicardipine PK or PD parameters. |
| PGx | Wu_2020 | not_relevant | 0 | 0 | The paper investigates the association between MICA expression and cisplatin chemoresistance in small cell lung cancer, using nicardipine only as an ABCG2 inhibitor in in vitro cell assays, not as the primary drug of interest for pharmacogenomic PK/PD analysis. |
| PGx | Xia_2012 | not_relevant | 0 | 0 | The study investigates the inhibitory effects of nicardipine on CYP3A4 activity (drug-enzyme interaction) and QSAR relationships, but does not report how a gene variant or genotype alters the PK or PD parameters of nicardipine. |
| popPK | Xu_2007 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology investigation of serotonin effects on colonic myocytes where nicardipine is used only as a pharmacological blocker, not as the subject of a pharmacokinetic analysis. |
| PD | Xu_2007 | not_relevant | 0 | 0 | The paper investigates the pharmacology of serotonin (5-HT) on colonic myocytes; nicardipine is used only as a tool compound to block 5-HT effects, and no exposure-response or dose-response relationship for nicardipine itself is reported. |
| PGx | Yamazoe_2020 | not_relevant | 0 | 0 | The paper discusses the structural binding mechanism of nicardipine as a CYP3A4 inhibitor using a computational template, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Yukawa_2001 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of digoxin, with nicardipine serving only as a covariate for concomitant administration rather than the subject drug. |
| PGx | Zhou_2005 | not_relevant | 0 | 0 | The study investigates the effect of dihydropyridines on BCRP-mediated transport of other drugs (mitoxantrone/topotecan) and does not report pharmacogenomic effects on nicardipine's PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-29 09:59 UTC</sub>

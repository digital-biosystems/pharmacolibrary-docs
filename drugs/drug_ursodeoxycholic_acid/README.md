<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05A&quot;,&quot;href&quot;:&quot;atc/A05A.md&quot;},{&quot;label&quot;:&quot;ursodeoxycholic acid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;UrsodeoxycholicAcid_Yue2008_reference&quot;,&quot;label&quot;:&quot;Yue_2008_reference&quot;,&quot;href&quot;:&quot;drugs/drug_ursodeoxycholic_acid/UrsodeoxycholicAcid_Yue2008_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# ursodeoxycholic acid

- **generic name:** ursodeoxycholic acid
- **ATC codes:** `A05AA02`
- **DrugBank:** [DB01586](https://go.drugbank.com/drugs/DB01586)
- **groups:** approved, investigational

## About

**Description.** Ursodeoxycholic acid (UDCA), also known as ursodiol, is a naturally-occurring bile acid that constitutes a minor fraction of the human bile acid pool.[A256272,A256277] UDCA has been used to treat liver disease for decades: its first use in traditional medicine dates back more than a hundred years.[A256267,A256463] UDCA was first characterized in the bile of the Chinese black bear and is formed by 7b-epimerization of [chenodeoxycholic acid], which is a primary bile acid.[A256272] Due to its hydrophilicity, UDCA is less toxic than [cholic acid] or [chenodeoxycholic acid].[A256272] 

UDCA was first approved by the FDA in 1987 for dissolution of gallstones and for primary biliary cirrhosis in 1996.[A256272] UDCA works by replacing the hydrophobic or more toxic bile acids from the bile acid pool.[A256272]

**Indication.** Ursodeoxycholic acid is indicated for the treatment of patients with primary biliary cholangitis.[L44627] 

It is used for the short-term treatment of radiolucent, noncalcified gallbladder stones in patients selected for elective cholecystectomy. It is also used to prevent gallstone formation in obese patients experiencing rapid weight loss.[L44793]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 14:32 | 4:31 | 0/1/0 | 0/0/0 | 0/0/3 | 118,899/5,840 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 1/9 | 10/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Yue_2008_reference](drugs/drug_ursodeoxycholic_acid/UrsodeoxycholicAcid_Yue2008_reference.md) | Yue PF et al., Preparation, characterization, and bioa…, Drug development and indust… (2008) | [10.1080/03639040701842477](https://doi.org/10.1080/03639040701842477) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ABCB11** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Kreimeyer_2023](drugs/drug_ursodeoxycholic_acid/pgx_Kreimeyer_2023_ABCB11_Q100.md) | Kreimeyer H et al., Influence of the Bile Acid Transporter…, Journal of personalized med… (2023) | [10.3390/jpm13071180](https://doi.org/10.3390/jpm13071180) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ABCB4** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Kreimeyer_2023](drugs/drug_ursodeoxycholic_acid/pgx_Kreimeyer_2023_ABCB4_Q100.md) | Kreimeyer H et al., Influence of the Bile Acid Transporter…, Journal of personalized med… (2023) | [10.3390/jpm13071180](https://doi.org/10.3390/jpm13071180) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **PNPLA3** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Kreimeyer_2023](drugs/drug_ursodeoxycholic_acid/pgx_Kreimeyer_2023_PNPLA3_Q100.md) | Kreimeyer H et al., Influence of the Bile Acid Transporter…, Journal of personalized med… (2023) | [10.3390/jpm13071180](https://doi.org/10.3390/jpm13071180) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ursodeoxycholic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | bile duct | <sub>“…constitutes a minor fraction (about 5%) of the total human bile acid pool. Following oral…”</sub> | prose |
| absorption | blood-brain barrier | `SLCO1A2` inducer/inhibitor/substrate | DrugBank actor |
| absorption | ileum | `SLC10A2` inhibitor | DrugBank actor |
| absorption | liver | <sub>“…absorption is incomplete. Once absorbed, ursodiol undergoes hepatic extraction to about 50…”</sub> | prose |
| absorption | small intestine | `SLCO1A2` inducer/inhibitor/substrate | DrugBank actor |
| metabolism | bile duct | <sub>“…th glycine or taurine.[A256277] UDCA is also decreased into bile. Glycine or taurine conju…”</sub> | prose |
| metabolism | liver | `CYP3A4` inducer, `SLC10A1` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer | DrugBank actor |
| excretion | bile duct | <sub>“…Ursodeoxycholic acid is excreted primarily in the feces. Renal elimination is a minor elim…”</sub> | prose |
| excretion | kidney | `ABCC2` inducer, `ABCC4` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` inducer/inhibitor/substrate/transport, `ABCC2` inducer, `ABCC4` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: ABCB4 (transport), AKR1C2 (inhibitor), BLVRA (activator), NR1H4 (partial agonist), PNPLA3 (target), SLC23A2 (activator), SLC26A3 (upregulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 118 matched, 48 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gordi_2014.pdf` | Gordi T et al., Pharmacokinetic analysis of 14C-ursodio…, Journal of clinical pharmac… (2014) | popPK | 9 | [10.1002/jcph.327](https://doi.org/10.1002/jcph.327) | [24805288](https://pubmed.ncbi.nlm.nih.gov/24805288) | The paper describes a population PK study of ursodeoxycholic acid (ursodiol) in infants using a two-compartment model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Yue_2008.pdf` | Yue PF et al., Preparation, characterization, and bioa…, Drug development and indust… (2008) | popPK | 8 | [10.1080/03639040701842477](https://doi.org/10.1080/03639040701842477) | [18612911](https://pubmed.ncbi.nlm.nih.gov/18612911) | The study reports quantitative PK parameters (Tmax, Cmax, AUC) for ursodeoxycholic acid in rats, but lacks specific clearance, volume, or half-life values. |

<sub>queue written 2026-09-18T14:28:26.511419+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Becquemont_2006 | not_relevant | 0 | 0 | The study investigates the effect of UDCA on the pharmacokinetics of other drugs (digoxin, midazolam) via enzyme induction, not the effect of a gene variant on UDCA's pharmacokinetics or pharmacodynamics. |
| PGx | Bodin_2005 | not_relevant | 0 | 0 | The paper describes CYP3A4-mediated metabolism of ursodeoxycholic acid but does not report a pharmacogenomic effect (gene variant/genotype) on PK or PD parameters. |
| popPK | Bramlett_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding and gene repression, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Estiú_2015 | not_relevant | 0 | 0 | The study investigates the mechanism of action of UDCA in cholestasis of pregnancy but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Fabbri_2000 | not_relevant | 0 | 0 | The study evaluates the clinical efficacy of UDCA in combination with interferon for hepatitis C but does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Fossdal_2021 | irrelevant | 0 | 0 | The paper is a longitudinal biomarker study in PSC patients and does not report any pharmacokinetic parameters for ursodeoxycholic acid. |
| popPK | Gordi_2014 | relevant | 9 | 0 | The paper describes a population PK study of ursodeoxycholic acid (ursodiol) in infants using a two-compartment model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| PGx | Hayashi_2021 | not_relevant | 0 | 0 | The paper is a case report on pazopanib-induced liver injury and does not report any pharmacogenomic effect on the PK or PD of ursodeoxycholic acid. |
| PGx | Jacquemin_1999 | not_relevant | 0 | 0 | The text is a general overview of PFIC genetics and mentions UDCA treatment only in the context of future genotype-phenotype correlations, without reporting any specific pharmacokinetic or pharmacodynamic data. |
| PGx | Lee_2024 | not_relevant | 0 | 0 | The paper reports endogenous serum levels of UDCA in ALS patients, not the pharmacokinetics or pharmacodynamics of exogenous UDCA administration influenced by genetic variants. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The study focuses on adefovir derivatives for HBV treatment, and ursodeoxycholic acid is only mentioned in the context of docking studies, not as the subject of a pharmacokinetic analysis. |
| PD | Li_2019 | not_relevant | 0 | 0 | The paper focuses on adefovir derivatives, not ursodeoxycholic acid, and reports antiviral EC50 values rather than a pharmacodynamic exposure-response relationship for the target drug. |
| PGx | Little_2022 | not_relevant | 0 | 0 | The paper investigates the physiological role of PXR and CAR on the gut microbiome and bile acid composition in genetically modified mice, but does not report pharmacokinetic or pharmacodynamic parameters of ursodeoxycholic acid as a drug. |
| PGx | Mackenzie_2008 | not_relevant | 2 | 0 | The paper characterizes the enzyme UGT3A1 and notes a catalytically inactive variant, but it does not report in vivo pharmacokinetic or pharmacodynamic parameter changes (e.g., AUC, Cmax) for ursodeoxycholic acid in humans. |
| popPK | Mahmood_1998 | irrelevant | 0 | 0 | The paper describes a method for estimating ka using a hypothetical drug and does not report pharmacokinetic parameters for ursodeoxycholic acid. |
| PGx | Marschall_2005 | not_relevant | 0 | 0 | The study investigates the molecular mechanisms of action of UDCA in healthy subjects but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Matsunaga_2023 | not_relevant | 0 | 0 | The paper investigates paclitaxel resistance in breast cancer cells and does not mention ursodeoxycholic acid. |
| PGx | Mroz_2019 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of UDCA on ion transport in CF vs normal cells, but does not report a pharmacogenomic effect (genetic variant altering drug PK/PD) for UDCA. |
| PGx | Pęczuła_2025 | not_relevant | 0 | 0 | The paper is a review of the genetics of gallstone disease and does not report pharmacogenomic effects on the PK or PD of ursodeoxycholic acid. |
| PGx | Rostomova_2026 | not_relevant | 0 | 0 | The study compares the efficacy of different drugs in a specific disease population (Gilbert syndrome) but does not report pharmacogenomic effects (gene variant/genotype) on the PK or PD parameters of ursodeoxycholic acid. |
| PGx | Scottoni_2020 | not_relevant | 0 | 0 | The paper is a review of biliary atresia management and does not report any pharmacogenomic effects on the PK or PD of ursodeoxycholic acid. |
| PGx | Su_2008 | not_relevant | 0 | 0 | The paper investigates the role of AKR1C2 in the toxicity of 1-nitropyrene and benzo[a]pyrene, using ursodeoxycholic acid only as an inhibitor, and does not report pharmacogenomic effects on the PK or PD of ursodeoxycholic acid itself. |
| PGx | Takahashi_2016 | not_relevant | 0 | 0 | The paper investigates the species difference in bile acid metabolism (mouse vs human) and identifies Cyp2c70 as the enzyme responsible for muricholic acid synthesis in mice, but it does not report a pharmacogenomic effect of a human gene variant on the PK or PD of ursodeoxycholic acid. |
| PGx | Tang_2016 | not_relevant | 0 | 0 | The study investigates the mechanism of a herbal capsule in mice and does not report any pharmacogenomic effects (gene variants) on the PK or PD of ursodeoxycholic acid. |
| PGx | Thébaut_2018 | not_relevant | 0 | 0 | The paper is a review of cholestatic pruritus management in children and does not report any pharmacogenomic effects on the PK or PD of ursodeoxycholic acid. |
| popPK | Varongkriengkrai_2025 | irrelevant | 0 | 0 | The paper is a study on the antiviral and antibacterial activities of bile acid salts, not a pharmacokinetic study, and contains no PK parameters for ursodeoxycholic acid. |
| PD | Varongkriengkrai_2025 | not_relevant | 4 | 3 | The paper reports an EC50 for lithocholic acid (LCA) but explicitly states that ursodeoxycholic acid (UDCA) only exhibited antibacterial activity (measured by inhibition zone diameter) and did not display antiviral/virucidal activity, so no PD parameters are reported for UDCA. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tacrolimus, not ursodeoxycholic acid. |
| PGx | Wang_2022 | not_relevant | 0 | 0 | The paper investigates the interaction between bile acids (including ursodeoxycholic acid) and the OAT2 transporter, but does not report how a gene variant changes the PK or PD of ursodeoxycholic acid itself. |
| PGx | Wang_2023 | not_relevant | 0 | 0 | The paper describes the engineering of an enzyme for the industrial biosynthesis of ursodeoxycholic acid, not the effect of human genetic variants on the drug's pharmacokinetics or pharmacodynamics. |
| PGx | Wasuwanich_2020 | not_relevant | 0 | 0 | The paper is a review of cystic fibrosis-associated liver disease and mentions the use of ursodeoxycholic acid, but it does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Wong_2019 | not_relevant | 0 | 0 | The paper is a survey of clinical practices for biliary atresia and mentions the use of ursodeoxycholic acid but does not report any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Wu_2021 | not_relevant | 0 | 0 | The paper investigates the mechanism of arbutin in cholestasis and does not report pharmacogenomic effects on the PK/PD of ursodeoxycholic acid. |
| PGx | Wu_2023 | not_relevant | 0 | 0 | The paper reports a case of PKD and Crigler-Najjar syndrome treated with ursodeoxycholic acid, but does not investigate how the identified gene variants (PKLR, UGT1A1) affect the pharmacokinetics or pharmacodynamics of the drug itself. |
| PGx | Xiang_2012 | not_relevant | 0 | 0 | The study investigates endogenous bile acid concentrations in healthy volunteers, not the pharmacokinetics or pharmacodynamics of ursodeoxycholic acid as an administered drug. |
| popPK | Xu_2022 | irrelevant | 0 | 0 | The study focuses on the mechanism of action (FFA4 agonism) and in vitro/in vivo efficacy, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Zeng_2017 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of Schisandrol B, not the pharmacogenomics of ursodeoxycholic acid. |
| PGx | Zheng_2017 | not_relevant | 0 | 0 | The paper focuses on the industrial bioproduction of ursodeoxycholic acid using engineered enzymes, not on human pharmacogenomics or PK/PD parameters. |
| PGx | Zhou_2019 | not_relevant | 0 | 0 | The paper investigates metabolic pathways and transporter interactions in vitro but does not report any genetic variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Ziegler_2024 | not_relevant | 0 | 0 | The paper describes a method for measuring bile acids in dried blood spots and compares profiles in cholestatic diseases, but does not report any pharmacogenomic effects on the PK or PD of ursodeoxycholic acid. |
| PGx | Zou_2025 | not_relevant | 0 | 0 | The paper reports genotype-phenotype correlations for disease severity and clinical outcomes (e.g., time to symptom resolution) in Citrin Deficiency, but does not report pharmacokinetic or pharmacodynamic parameters of ursodeoxycholic acid. |
| PGx | van_2021 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of UDCA on bilirubin levels in animal models but does not report any pharmacogenomic effects (gene variant/genotype differences) on the PK or PD of UDCA. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-18 14:28 UTC</sub>

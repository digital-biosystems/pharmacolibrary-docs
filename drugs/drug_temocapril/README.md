<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;temocapril&quot;}]"></div>

# temocapril

- **generic name:** temocapril
- **ATC codes:** `C09AA14`
- **DrugBank:** [DB08836](https://go.drugbank.com/drugs/DB08836) · **PubChem:** [CID 443874](https://pubchem.ncbi.nlm.nih.gov/compound/443874)
- **molar mass:** 476.609 g/mol (C23H28N2O5S2) — DrugBank
- **groups:** investigational

## About

Temocapril is an ACE inhibitor developed for treating high blood pressure. It is considered investigational and has not been authorised in the European Union; it has been used mainly in Japan.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7698194](https://www.wikidata.org/wiki/Q7698194) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| temocapril (temocapril and temocaprilat) | parent | 476.609 | C23H28N2O5S2 | DrugBank | [443874](https://pubchem.ncbi.nlm.nih.gov/compound/443874) | Luo_2024 |
| benazeprilat | metabolite | 396.443 | C22H24N2O5 | PubChem | [5463984](https://pubchem.ncbi.nlm.nih.gov/compound/5463984) | Luo_2024 |
| cilazaprilat | metabolite | 389.452 | C20H27N3O5 | PubChem | [64766](https://pubchem.ncbi.nlm.nih.gov/compound/64766) | Luo_2024 |
| enalaprilat | metabolite | 348.399 | C18H24N2O5 | PubChem | [5462501](https://pubchem.ncbi.nlm.nih.gov/compound/5462501) | Luo_2024 |
| oseltamivir carboxylate | metabolite | 284.356 | C14H24N2O4 | PubChem | [449381](https://pubchem.ncbi.nlm.nih.gov/compound/449381) | Luo_2024 |
| perindoprilat | metabolite | 340.42 | C17H28N2O5 | PubChem | [72022](https://pubchem.ncbi.nlm.nih.gov/compound/72022) | Luo_2024 |
| temocaprilat | metabolite | 448.552 | C21H24N2O5S2 | PubChem | [443151](https://pubchem.ncbi.nlm.nih.gov/compound/443151) | Luo_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:38 | 3:06 | 0/1/0 | 0/1/0 | 0/0/1 | 94,871/3,672 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 9/1 | 1/9 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Luo_2024_reference](drugs/drug_temocapril/Temocapril_Luo2024_reference.md) | — | general linear (no model) | 2 | Luo X et al., Simultaneously Predicting the Pharmacok…, Pharmaceutics (2024) | [10.3390/pharmaceutics16020234](https://doi.org/10.3390/pharmaceutics16020234) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Yamamoto_2012_MMP_2](drugs/drug_temocapril/pd_Yamamoto_2012_MMP_2.md) | MMP-2 activity ← temocaprilat · inhibition effect | — | Yamamoto D et al., Matrix metalloproteinase-2 inhibition b…, Clinical and experimental p… (2012) | [10.1111/j.1440-1681.2012.12003.x](https://doi.org/10.1111/j.1440-1681.2012.12003.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **SLCO1B1** | `Q88` · AUC | transport | [Maeda_2006](drugs/drug_temocapril/pgx_Maeda_2006_SLCO1B1_Q88.md) | Maeda K et al., Effects of organic anion transporting p…, Clinical pharmacology and t… (2006) | [10.1016/j.clpt.2006.01.011](https://doi.org/10.1016/j.clpt.2006.01.011) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=temocapril) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `SLCO1A2` unknown | DrugBank actor |
| absorption | small intestine | `SLC15A1` unknown, `SLCO1A2` unknown | DrugBank actor |
| metabolism | liver | `SLCO1B1` transport | paper PGx gene |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ACE (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 43 matched, 43 returned
- **screened:** 11  ·  **relevant:** 7
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Arakawa_2001.pdf` | Arakawa M et al., Pharmacokinetics and pharmacodynamics o…, European journal of clinica… (2001) | popPK | 8 | [10.1007/s002280000237](https://doi.org/10.1007/s002280000237) | [11294366](https://pubmed.ncbi.nlm.nih.gov/11294366) | The study reports PK of temocaprilat (active metabolite) in humans, but specific numeric parameter values (CL, V, t1/2) are not present in the provided abstract text. |
| `Akazawa_2018.pdf` | Akazawa T et al., Application of Intestinal Epithelial Ce…, Drug metabolism and disposi… (2018) | pgx | 7 | [10.1124/dmd.118.083246](https://doi.org/10.1124/dmd.118.083246) | [30135242](https://www.ncbi.nlm.nih.gov/pubmed/30135242) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T07:37:44.725216+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akazawa_2018 | irrelevant | 0 | 0 | no_text gate: only 176 chars of text extracted (&lt; 400) |
| PGx | Akazawa_2018 | not_relevant | 0 | 0 | The paper focuses on intestinal epithelial cells and prodrug hydrolysis generally, with no mention of temocapril or specific pharmacogenomic variants affecting its PK/PD. |
| popPK | Arakawa_2001 | relevant | 8 | 2 | The study reports PK of temocaprilat (active metabolite) in humans, but specific numeric parameter values (CL, V, t1/2) are not present in the provided abstract text. |
| popPK | Hirosawa_2023 | irrelevant | 1 | 0 | Temocapril is used only as a probe substrate to characterize hydrolase inhibition by orlistat, and no quantitative PK parameters (CL, V, etc.) for temocapril are reported. |
| PD | Hirosawa_2023 | not_relevant | 1 | 1 | Temocapril appears only as an in vitro CES1 substrate with an IC50 (&gt;100 nM) for orlistat inhibition; no exposure- or dose-response relationship or PD parameters for temocapril itself are reported. |
| popPK | Horita_2006 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the antiproteinuric effects and aldosterone breakthrough of temocapril, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ishikawa_1997 | irrelevant | 0 | 0 | The study is a pharmacodynamic/toxicology investigation of temocapril's effect on cyclosporine-induced nephrotoxicity in rats, reporting renal function markers (creatinine, blood flow) rather than quantitative pharmacokinetic parameters (CL, V, ka) for temocapril. |
| popPK | Ishizuka_1997 | irrelevant | 2 | 2 | The study focuses on the mechanism of biliary excretion (transporter kinetics) rather than reporting standard population pharmacokinetic parameters like clearance, volume of distribution, or half-life for the parent drug or metabolite. |
| popPK | Ishizuka_1998 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of hepatic uptake transporters (oatp1) in rat hepatocytes, not a pharmacokinetic study reporting disposition parameters like clearance, volume, or half-life for temocapril. |
| popPK | Ishizuka_1999 | irrelevant | 2 | 2 | The study reports biliary transport clearance for temocaprilat (the metabolite) in multiple animal species, but does not provide standard systemic PK parameters (CL, V, t1/2) for temocapril or a population PK model. |
| popPK | Kanno_2005 | irrelevant | 0 | 0 | The study is a clinical trial assessing renal outcomes in IgA nephropathy and does not report pharmacokinetic parameters for temocapril. |
| popPK | Luo_2024 | relevant | 8 | 2 | The paper develops a PBPK model for temocapril (a CES1 substrate) in humans, but specific numeric PK parameters for temocapril are not explicitly listed in the provided evidence tables (which focus on other drugs like flumazenil and pethidine) or text, likely residing in figures or supplementary material not fully detailed here. |
| popPK | Maeda_2006 | relevant | 4 | 5 | The study reports AUC and renal clearance values for temocapril in humans, but lacks compartmental parameters (CL, V, ka) required for a full PK model. |
| popPK | Ninomiya_2005 | irrelevant | 0 | 0 | The study is an in-vitro functional analysis of Mrp2 transporters in dogs and rats, and temocaprilat is only mentioned as a reference substrate for biliary excretion clearance, not as the subject of a PK parameter study. |
| popPK | Nozawa_2006 | irrelevant | 2 | 0 | The study focuses on mortality and pharmacodynamics (ACE inhibition, blood pressure) in rats, and while it mentions PK of the metabolite, no quantitative PK parameter values (CL, V, etc.) are provided in the evidence. |
| popPK | Nozawa_2011 | irrelevant | 2 | 0 | The study is an in situ rat intestinal perfusion model focusing on absorption mechanisms and hydrolysis, not a systemic pharmacokinetic study reporting quantitative disposition parameters (CL, V, t1/2) for temocapril. |
| popPK | Sasaki_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter-mediated biliary clearance using temocaprilat as a probe ligand, not a pharmacokinetic study reporting disposition parameters for temocapril. |
| popPK | Shionoiri_1993 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic drug interactions with ACE inhibitors and does not report original quantitative disposition parameters for temocapril. |
| PD | Shionoiri_1993 | not_relevant | 1 | 0 | Narrative review of ACE inhibitor PK interactions; temocapril mentioned only qualitatively with no numeric PD or exposure-response data. |
| popPK | Shionoiri_1997 | irrelevant | 0 | 0 | The paper is a review of fosinopril pharmacokinetics, and temocapril is only mentioned as a comparator for excretion pathways without any quantitative data. |
| popPK | Shioya_1989 | irrelevant | 0 | 0 | The paper describes an analytical method for CS-622 (not temocapril) and contains no pharmacokinetic parameter values. |
| popPK | Shou_1997 | irrelevant | 0 | 0 | The study focuses on renal function and antioxidant enzyme activities in rats, not on the pharmacokinetic parameters of temocapril. |
| popPK | Song_2002 | irrelevant | 2 | 0 | This is a review article that discusses temocapril qualitatively but does not provide specific quantitative pharmacokinetic parameter values (CL, V, etc.) in the text. |
| PD | Song_2002 | not_relevant | 2 | 1 | Review article with only qualitative statements about ACE inhibitor dose-response curves; no numeric PD parameters for temocapril are reported or derivable. |
| popPK | Takikawa_2001 | irrelevant | 2 | 0 | The study investigates biliary excretion mechanisms in liver-injured rats and does not report standard quantitative PK parameters (CL, V, ka) for temocapril. |
| PGx | Yamada_2023 | not_relevant | 0 | 0 | The study uses genome-edited Caco-2 cells to model intestinal absorption and metabolism, but it does not report pharmacogenomic effects of human genetic variants on PK/PD parameters. |
| popPK | Yasunari_2004 | irrelevant | 1 | 0 | The paper is a review summarizing pharmacological and clinical effects without reporting specific quantitative pharmacokinetic parameter values (CL, V, ka, etc.). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:35 UTC</sub>

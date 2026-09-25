<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;tapentadol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tapentadol_Watson2019_reference&quot;,&quot;label&quot;:&quot;Watson_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Watson2019_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tapentadol_Khalil2020_final&quot;,&quot;label&quot;:&quot;Khalil_2020_final&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Khalil2020_final.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tapentadol_Joczyk2022_reference&quot;,&quot;label&quot;:&quot;Jo\u0144czyk_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Joczyk2022_reference.md&quot;,&quot;status&quot;:&quot;not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tapentadol_Zhang2017_reference&quot;,&quot;label&quot;:&quot;Zhang_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Zhang2017_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# tapentadol

- **generic name:** tapentadol
- **ATC codes:** `N02AX06`
- **DrugBank:** [DB06204](https://go.drugbank.com/drugs/DB06204)
- **groups:** approved

## About

**Description.** Tapentadol is a centrally-acting synthetic analgesic with a dual mechanism of action. It is a mu-opioid receptor agonist that also inhibits norepinephrine reuptake.[A260721, A36596]

Tapentadol was first approved by the FDA on November 20, 2008. The extended-release formulation of tapentadol was also approved by the FDA on August 26, 2011.[L47291] Used in the management of pain, tapentadol is typically reserved for patients who have limited alternative treatment options.

**Indication.** Tapentadol is indicated for the management of acute pain severe enough to require an opioid analgesic and for which alternative treatments are inadequate. Due to the risks of addiction, drug abuse, and drug misuse, tapentadol is reserved for patients for whom alternative treatment options are unavailable.[L47286, L47516, L47521]

The immediate-release tapentadol oral tablets are approved for use in patients six years and older with a body weight of at least 40 kg.[L47286] Tapentadol oral solution is used in patients aged six years and older with a body weight of at least 16 kg.[L47521] These formulations are not intended for long-term use unless the pain remains severe enough to require an opioid analgesic, for which alternative treatment options remain inadequate.

The extended-release tablets of tapentadol are indicated for the management of pain severe enough to require daily, around-the-clock, long-term opioid treatment and for which alternative treatment options are inadequate. They are also indicated for the management of neuropathic pain associated with diabetic peripheral neuropathy (DPN) in adults severe enough to require daily, around-the-clock, long-term opioid treatment and for which alternative treatment options are inadequate. This formulation is not indicated as an as-needed (prn) analgesic.[L47516]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-20 21:39 | 11:34 | 2/1/1 | 1/0/0 | 0/0/2 | 209,101/12,861 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 4/11 | 13/2 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub> | [Watson_2019_reference](drugs/drug_tapentadol/Tapentadol_Watson2019_reference.md) | Watson E et al., Population pharmacokinetic modeling to…, Journal of pain research (2019) | [10.2147/JPR.S208454](https://doi.org/10.2147/JPR.S208454) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.462). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Khalil_2020_final](drugs/drug_tapentadol/Tapentadol_Khalil2020_final.md) | Khalil F et al., Population Pharmacokinetics of Tapentad…, Journal of pain research (2020) | [10.2147/JPR.S269549](https://doi.org/10.2147/JPR.S269549) |
| <span class="pk-badge pk-badge--neutral">not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.688). The first reading is what the record holds.">cross-check: disputed</span> | [Jończyk_2022_reference](drugs/drug_tapentadol/Tapentadol_Joczyk2022_reference.md) | Jończyk R et al., Multiple Dose Pharmacokinetics of Tapen…, Journal of pain research (2022) | [10.2147/JPR.S364902](https://doi.org/10.2147/JPR.S364902) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2017_reference](drugs/drug_tapentadol/Tapentadol_Zhang2017_reference.md) | Zhang L et al., Quantifying the Exposure of Tapentadol…, Clinical drug investigation (2017) | [10.1007/s40261-016-0482-z](https://doi.org/10.1007/s40261-016-0482-z) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.286). The first reading is what the record holds.">cross-check: disputed</span> | [Steel_2026](drugs/drug_tapentadol/pd_Steel_2026_N1.md) | Steel KAJ et al., Preclinical assay of the effects of lac…, Pain (2026) | [10.1097/j.pain.0000000000003810](https://doi.org/10.1097/j.pain.0000000000003810) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **OPRM1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Takemura_2024](drugs/drug_tapentadol/pgx_Takemura_2024_OPRM1_Q100.md) | Takemura M et al., Comparison of the Effects of OPRM1 A118…, Journal of pain and symptom… (2024) | [10.1016/j.jpainsymman.2023.09.017](https://doi.org/10.1016/j.jpainsymman.2023.09.017) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2C19** | `Q3` · CLint | metabolism | [Xu_2022](drugs/drug_tapentadol/pgx_Xu_2022_CYP2C19_Q3.md) | Xu RA et al., Effects of CYP2C19 variants on the meta…, Iranian journal of basic me… (2022) | [10.22038/IJBMS.2022.56996.12710](https://doi.org/10.22038/IJBMS.2022.56996.12710) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tapentadol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>“…dol in a fasted state is approximately 32% due to extensive first-pass metabolism. Maximum…”</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` metabolism/substrate, `CYP2C9` substrate, `CYP2D6` substrate, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `UGT2B7` substrate | DrugBank actor |
| excretion | kidney | <sub>“…Tapentadol and its metabolites are 99% excreted via the kidneys.[L47286]…”</sub> | prose |
| target | brain | `SLC6A4` inhibitor | DrugBank actor |
| target | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: OPRD1 (target), OPRK1 (target), OPRM1 (target), SLC6A2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 46 matched, 46 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 4  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Göhler_2013.pdf` | Göhler K et al., Comparative pharmacokinetics and bioava…, International journal of cl… (2013) | popPK | 10 | [10.5414/CP201722](https://doi.org/10.5414/CP201722) | [23357834](https://pubmed.ncbi.nlm.nih.gov/23357834) | The paper reports quantitative pharmacokinetic parameters for tapentadol, including clearance, volume of distribution, and half-life, directly in the text. |
| `Xu_2010.pdf` | Xu XS et al., Population pharmacokinetics of tapentad…, Clinical pharmacokinetics (2010) | popPK | 10 | [10.2165/11535390-000000000-00000](https://doi.org/10.2165/11535390-000000000-00000) | [20818833](https://pubmed.ncbi.nlm.nih.gov/20818833) | The paper is a population PK study for tapentadol, but the specific numeric parameter estimates (e.g., typical CL/F, V/F values) are not present in the provided abstract text, only variability percentages and qualitative covariate effects. |
| `Lavy_2014.pdf` | Lavy E et al., Use of the novel atypical opioid tapent…, Journal of veterinary pharm… (2014) | popPK | 9 | [10.1111/jvp.12123](https://doi.org/10.1111/jvp.12123) | [24611613](https://pubmed.ncbi.nlm.nih.gov/24611613) | The study reports quantitative PK parameters (Tmax, half-life, bioavailability) for tapentadol in goats, but specific clearance and volume values are not explicitly listed in the provided text. |
| `Xu_2012.pdf` | Xu XS et al., Pharmacokinetic and pharmacodynamic mod…, Pharmaceutical research (2012) | popPK | 9 | [10.1007/s11095-012-0786-5](https://doi.org/10.1007/s11095-012-0786-5) | [22618801](https://pubmed.ncbi.nlm.nih.gov/22618801) | The paper describes a population PK study for tapentadol, but the specific numeric parameter values are not present in the provided evidence text. |
| `Karbownik_2020.pdf` | Karbownik A et al., In vivo assessment of potential for UGT…, Biomedicine & pharmacothera… (2020) | pgx | 7 | [10.1016/j.biopha.2020.110530](https://doi.org/10.1016/j.biopha.2020.110530) | [32712531](https://www.ncbi.nlm.nih.gov/pubmed/32712531) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Natoli_2021.pdf` | Natoli S et al., Should we be concerned when COVID-19-po…, European review for medical… (2021) | pgx | 7 | [10.26355/eurrev_202107_26399](https://doi.org/10.26355/eurrev_202107_26399) | [34337735](https://www.ncbi.nlm.nih.gov/pubmed/34337735) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Muriel_2024.pdf` | Muriel J et al., Use of CYP2D6 substrates and inhibitors…, Biomedicine & pharmacothera… (2024) | pgx | 5 | [10.1016/j.biopha.2024.116882](https://doi.org/10.1016/j.biopha.2024.116882) | [38876046](https://www.ncbi.nlm.nih.gov/pubmed/38876046) | metadata signals extractable PGX data (CYP2D6) |
| `Pesce_2025.pdf` | Pesce AJ et al., CYP450-based reclassification of urinar…, Journal of opioid management (2025) | pgx | 5 | [10.5055/jom.1001](https://doi.org/10.5055/jom.1001) | [42429026](https://www.ncbi.nlm.nih.gov/pubmed/42429026) | metadata signals extractable PGX data (CYP450) |

<sub>queue written 2026-09-20T21:29:10.792097+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Barbosa_2016 | not_relevant | 2 | 0 | The paper is a review of metabolomics and general metabolic pathways, not a study reporting specific quantitative pharmacogenomic effects on PK/PD parameters for tapentadol. |
| PGx | Chand_2025 | not_relevant | 0 | 0 | The paper discusses Crigler-Najjar Syndrome and phenobarbitone, not tapentadol pharmacogenomics. |
| PGx | Cottrill_2021 | not_relevant | 0 | 0 | The paper reports pharmacogenomic profiling data (genotypes/phenotypes) for 30 patients but does not report any measured pharmacokinetic or pharmacodynamic parameters for tapentadol or any other drug. |
| PGx | Cua_2025 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (DDIs) affecting metabolic ratios, not pharmacogenomic effects (gene variants) on tapentadol PK/PD. |
| PGx | DePriest_2015 | not_relevant | 0 | 0 | The paper is a general review of opioid metabolism and does not report specific pharmacogenomic effects on tapentadol PK/PD parameters. |
| PGx | Domínguez-Oliva_2021 | not_relevant | 0 | 0 | The paper is a review of pharmacology in dogs and cats and does not report human pharmacogenomic effects on tapentadol PK/PD. |
| PGx | Heneedak_2025 | not_relevant | 0 | 0 | The study reports pharmacokinetic drug-drug interactions in rats, not pharmacogenomic effects (gene variants) on tapentadol PK/PD. |
| popPK | Huntjens_2016 | irrelevant | 0 | 0 | no_text gate: only 396 chars of text extracted (&lt; 400) |
| PGx | Karbownik_2020 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (DDI) between sorafenib and tapentadol, not a pharmacogenomic effect based on genetic variants. |
| popPK | Lavy_2014 | relevant | 9 | 4 | The study reports quantitative PK parameters (Tmax, half-life, bioavailability) for tapentadol in goats, but specific clearance and volume values are not explicitly listed in the provided text. |
| PGx | Manandhar_2022 | not_relevant | 0 | 0 | The paper investigates the intrinsic efficacy of tapentadol at wild-type and variant mu-opioid receptors in vitro, but does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters in humans. |
| PGx | Mercadante_2011 | not_relevant | 0 | 0 | The paper is a general review of opioid analgesia and mentions tapentadol only as an example of a drug with a different mechanism, without reporting any specific pharmacogenomic effects on its PK or PD parameters. |
| PGx | Muriel_2024 | not_relevant | 2 | 0 | The study analyzes a mixed population of opioids (tramadol, hydromorphone, tapentadol, oxycodone) and reports only general associations with pain outcomes, without providing specific pharmacokinetic or pharmacodynamic data for tapentadol stratified by genotype. |
| PGx | Natoli_2021 | not_relevant | 0 | 0 | The paper is a narrative review on drug-drug interactions between opioids and COVID-19 therapies, and does not report pharmacogenomic effects on tapentadol PK/PD. |
| PGx | Pesce_2025 | not_relevant | 2 | 5 | The paper reports population-level metabolic ratio cutoffs for tapentadol based on CYP450 phenotypes, but does not report specific pharmacokinetic or pharmacodynamic parameter changes (e.g., AUC, Cmax, Emax) for specific genotypes. |
| PGx | Pesce_2025_2 | not_relevant | 2 | 0 | The paper establishes reference intervals for urinary metabolic ratios to detect deviations (potentially due to genetics) but does not report specific pharmacogenomic effects or fitted effect sizes for tapentadol. |
| PGx | Rasool_2019 | not_relevant | 5 | 5 | The study reports in vitro sulfation activity of SULT1A1 allozymes, not in vivo pharmacokinetic or pharmacodynamic parameters. |
| PGx | Roulet_2021 | not_relevant | 0 | 0 | The paper is a narrative review comparing tapentadol and tramadol; it mentions that tapentadol avoids CYP450 polymorphism issues but does not report specific pharmacogenomic effect sizes or data for tapentadol. |
| PGx | Roulet_2021_2 | not_relevant | 0 | 0 | The text discusses tapentadol's mechanism and lack of CYP450 metabolism but does not report specific pharmacogenomic effects on PK or PD parameters. |
| PGx | Sloan_2022 | not_relevant | 0 | 0 | The paper is a general review of treatments for painful diabetic neuropathy and does not report specific pharmacogenomic effects on tapentadol PK/PD parameters. |
| PGx | Smith_2014 | not_relevant | 0 | 0 | The paper discusses opioid-induced nausea and vomiting generally and does not mention tapentadol or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Steel_2026 | irrelevant | 0 | 0 | The study is a preclinical electrophysiological assay measuring spinal evoked potentials, not a pharmacokinetic study, and does not report quantitative disposition parameters (CL, V, ka) for tapentadol. |
| PGx | Takemura_2024 | not_relevant | 0 | 0 | The study reports that the OPRM1 A118G polymorphism does not significantly affect the efficacy (pain scores) of tapentadol. |
| PGx | Terlinden_2010 | not_relevant | 0 | 0 | The paper characterizes the pharmacological activity of tapentadol metabolites but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Wang_2026 | not_relevant | 0 | 0 | The paper is a review of structural modifications of tramadol and does not report pharmacogenomic effects on tapentadol PK/PD parameters. |
| popPK | Xu_2010 | relevant | 10 | 2 | The paper is a population PK study for tapentadol, but the specific numeric parameter estimates (e.g., typical CL/F, V/F values) are not present in the provided abstract text, only variability percentages and qualitative covariate effects. |
| popPK | Xu_2012 | relevant | 9 | 0 | The paper describes a population PK study for tapentadol, but the specific numeric parameter values are not present in the provided evidence text. |
| PGx | Yoshioka_2017 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between warfarin and opioids (methadone/oxycodone) and does not investigate the effect of gene variants on tapentadol pharmacokinetics or pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-20 21:29 UTC</sub>

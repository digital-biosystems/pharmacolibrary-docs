<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;adenosine&quot;}]"></div>

# adenosine

- **generic name:** adenosine
- **ATC codes:** `C01EB10`
- **DrugBank:** [DB00640](https://go.drugbank.com/drugs/DB00640) · **PubChem:** [CID 60961](https://pubchem.ncbi.nlm.nih.gov/compound/60961)
- **molar mass:** 267.2413 g/mol (C10H13N5O4) — DrugBank
- **groups:** approved, investigational

## About

**Description.** The structure of adenosine was first described in 1931,[A229823] though the vasodilating effects were not described in literature until the 1940s.[A229828] Adenosine is indicated as an adjunct to thallium-201 in myocardial perfusion scintigraphy,[L31983] though it is rarely used in this indication, having largely been replaced by [dipyridamole] and [regadenson].[A229833,A229838] Adenosine is also indicated in the treatment of supraventricular tachycardia.[L31998]

Adenosine was granted FDA approval on 30 October 1989.[L31978]

**Indication.** Adenosine is indicated as an adjunct to thallium-201 in myocardial perfusion scintigraphy in patients unable to adequately exercise.[L31983] It is also indicated to convert sinus rhythm of paroxysmal supraventricular tachycardia.[L31998]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 18:53 | 1:43:43 | 0/0/0 | 0/0/0 | 0/0/1 | 368,340/19,697 | ollama / qwen3.8:27b-mtp-q8_0 | 33 | 11/22 | 25/8 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **CYP2C19** | `Q305` · kfm | formation | [Tantry_2024](drugs/drug_adenosine/pgx_Tantry_2024_CYP2C19_Q305.md) | Tantry US et al., Can CYP2C19 genotyping improve antiplat…, Kardiologia polska (2024) | [10.33963/v.phj.101890](https://doi.org/10.33963/v.phj.101890) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=adenosine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC28A2` substrate | DrugBank actor |
| absorption | small intestine | `SLC28A2` substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `SLC29A1` substrate | DrugBank actor |
| distribution | liver | `SLC29A1` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` formation, `XDH` substrate | DrugBank actor |
| metabolism | small intestine | `XDH` substrate | DrugBank actor |
| excretion | kidney | <sub>“…Adenosine is predominantly eliminated in the urine as uric acid.[A229793,L31983]…”</sub> | prose |

<sub>Actors without a tissue in the table: ADA (substrate), ADK (substrate), ADORA1 (target), ADORA2A (target), ADORA2B (target), ADORA3 (target), AK1 (substrate), GJA1 (substrate), NME1 (substrate), NME2 (substrate), PNP (substrate), SLC28A1 (substrate), SLC28A3 (unknown), SLC29A2 (substrate), SLC29A3 (substrate), SLC29A4 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7716 matched, 256 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_35 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Danhof_1993.pdf` | Danhof M et al., Pharmacokinetic-pharmacodynamic modelli…, European journal of drug me… (1993) | pd | 5 | [10.1007/BF03220007](https://doi.org/10.1007/BF03220007) | [8335038](https://www.ncbi.nlm.nih.gov/pubmed/8335038) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Darakjian_2019.pdf` | Darakjian LI et al., Physiologically Based Pharmacokinetic/P…, Molecular pharmaceutics (2019) | pd | 5 | [10.1021/acs.molpharmaceut.8b01276](https://doi.org/10.1021/acs.molpharmaceut.8b01276) | [30689395](https://www.ncbi.nlm.nih.gov/pubmed/30689395) | metadata signals extractable PD data (PharmacodynamicModel) |
| `Moser_2018.pdf` | Moser BA et al., Population Pharmacokinetic and Exposure…, Clinical pharmacokinetics (2018) | pd | 5 | [10.1007/s40262-017-0556-y](https://doi.org/10.1007/s40262-017-0556-y) | [28578536](https://www.ncbi.nlm.nih.gov/pubmed/28578536) | metadata signals extractable PD data (Exposure-Response) |
| `Pullarkat_2024.pdf` | Pullarkat V et al., A phase 1 trial of 8-chloro-adenosine i…, Cancer (2024) | pd | 5 | [10.1002/cncr.35077](https://doi.org/10.1002/cncr.35077) | [37897709](https://www.ncbi.nlm.nih.gov/pubmed/37897709) | metadata signals extractable PD data (PK/PD) |
| `Abou-Taleb_2016.pdf` | Abou-Taleb HK et al., Insecticidal properties of essential oi…, Natural product research (2016) | pd | 4 | [10.1080/14786419.2015.1038999](https://doi.org/10.1080/14786419.2015.1038999) | [25978134](https://www.ncbi.nlm.nih.gov/pubmed/25978134) | metadata signals extractable PD data (IC50) |
| `Barnes-Davies_1995.pdf` | Barnes-Davies M et al., Pre- and postsynaptic glutamate recepto…, The Journal of physiology (1995) | pd | 4 | [10.1113/jphysiol.1995.sp020974](https://doi.org/10.1113/jphysiol.1995.sp020974) | [8568678](https://www.ncbi.nlm.nih.gov/pubmed/8568678) | metadata signals extractable PD data (EC50) |
| `Bianchi_1993.pdf` | Bianchi G et al., Defibrotide, a single-stranded polydeox…, European journal of pharmac… (1993) | pd | 4 | [10.1016/0014-2999(93)90864-e](https://doi.org/10.1016/0014-2999(93)90864-e) | [8405101](https://www.ncbi.nlm.nih.gov/pubmed/8405101) | metadata signals extractable PD data (IC50) |
| `Camp_1998.pdf` | Camp D et al., Diimidazo[1,2-c:4',5'-e]pyrimidines: ad…, Bioorganic & medicinal chem… (1998) | pd | 4 | [10.1016/s0960-894x(98)00102-4](https://doi.org/10.1016/s0960-894x(98)00102-4) | [9871584](https://www.ncbi.nlm.nih.gov/pubmed/9871584) | metadata signals extractable PD data (EC50) |
| `Campos_2019.pdf` | Campos R et al., Pharmacological and transcriptomic char…, Comparative biochemistry an… (2019) | pd | 4 | [10.1016/j.cbpc.2019.04.015](https://doi.org/10.1016/j.cbpc.2019.04.015) | [31028932](https://www.ncbi.nlm.nih.gov/pubmed/31028932) | metadata signals extractable PD data (Emax) |
| `Coe_2017.pdf` | Coe AJ et al., Purinergic and adenosine receptors cont…, Comparative biochemistry an… (2017) | pd | 4 | [10.1016/j.cbpa.2017.09.013](https://doi.org/10.1016/j.cbpa.2017.09.013) | [28943320](https://www.ncbi.nlm.nih.gov/pubmed/28943320) | metadata signals extractable PD data (IC50) |
| `Daly_1983.pdf` | Daly JW et al., Subclasses of adenosine receptors in th…, Cellular and molecular neur… (1983) | pd | 4 | [10.1007/BF00734999](https://doi.org/10.1007/BF00734999) | [6309393](https://www.ncbi.nlm.nih.gov/pubmed/6309393) | metadata signals extractable PD data (EC50) |
| `Deharo_2025.pdf` | Deharo P et al., Pharmacologic Profile of A2A Adenosine…, CJC open (2025) | pd | 4 | [10.1016/j.cjco.2025.06.024](https://doi.org/10.1016/j.cjco.2025.06.024) | [41180347](https://www.ncbi.nlm.nih.gov/pubmed/41180347) | metadata signals extractable PD data (EC50) |
| `Deharo_2026.pdf` | Deharo P et al., cAMP production secondary to A2A adenos…, International journal of ca… (2026) | pd | 4 | [10.1016/j.ijcard.2026.134612](https://doi.org/10.1016/j.ijcard.2026.134612) | [42263949](https://www.ncbi.nlm.nih.gov/pubmed/42263949) | metadata signals extractable PD data (EC50) |
| `Dickenson_1995.pdf` | Dickenson JM et al., Coupling of an endogenous 5-HT1B-like r…, British journal of pharmaco… (1995) | pd | 4 | [10.1111/j.1476-5381.1995.tb15941.x](https://doi.org/10.1111/j.1476-5381.1995.tb15941.x) | [8680721](https://www.ncbi.nlm.nih.gov/pubmed/8680721) | metadata signals extractable PD data (EC50) |
| `Jarvis_1991.pdf` | Jarvis MF et al., Characterization of the binding of a no…, Molecular pharmacology (1991) | pd | 4 | not captured | [1987452](https://www.ncbi.nlm.nih.gov/pubmed/1987452) | metadata signals extractable PD data (IC50) |
| `Mathôt_1994.pdf` | Mathôt RA et al., Assessment of the enantiomeric purity o…, Naunyn-Schmiedeberg's archi… (1994) | pd | 4 | [10.1007/BF00180020](https://doi.org/10.1007/BF00180020) | [7935848](https://www.ncbi.nlm.nih.gov/pubmed/7935848) | metadata signals extractable PD data (IC50) |
| `Mudgal_2020.pdf` | Mudgal R et al., Inhibition of Chikungunya virus by an a…, FEBS letters (2020) | pd | 4 | [10.1002/1873-3468.13642](https://doi.org/10.1002/1873-3468.13642) | [31623018](https://www.ncbi.nlm.nih.gov/pubmed/31623018) | metadata signals extractable PD data (EC50) |
| `Patel_1982.pdf` | Patel J et al., Benzodiazepines are weak inhibitors of…, Neuroscience letters (1982) | pd | 4 | [10.1016/0304-3940(82)90368-8](https://doi.org/10.1016/0304-3940(82)90368-8) | [7070715](https://www.ncbi.nlm.nih.gov/pubmed/7070715) | metadata signals extractable PD data (IC50) |
| `Pejman_2014.pdf` | Pejman L et al., Thymoquinone, the main constituent of N…, Iranian journal of basic me… (2014) | pd | 4 | not captured | [25859306](https://www.ncbi.nlm.nih.gov/pubmed/25859306) | metadata signals extractable PD data (EC50) |
| `Serpa_2014.pdf` | Serpa A et al., Modulation of cGMP accumulation by aden…, European journal of pharmac… (2014) | pd | 4 | [10.1016/j.ejphar.2014.09.045](https://doi.org/10.1016/j.ejphar.2014.09.045) | [25300679](https://www.ncbi.nlm.nih.gov/pubmed/25300679) | metadata signals extractable PD data (EC50) |
| `Sharma_1988.pdf` | Sharma AD et al., Comparative quantitative electrophysiol…, The American journal of car… (1988) | pd | 4 | [10.1016/0002-9149(88)90939-3](https://doi.org/10.1016/0002-9149(88)90939-3) | [3341210](https://www.ncbi.nlm.nih.gov/pubmed/3341210) | metadata signals extractable PD data (sigmoid) |
| `Weir_1984.pdf` | Weir RL et al., Interaction of anticonvulsant drugs wit…, Epilepsia (1984) | pd | 4 | [10.1111/j.1528-1157.1984.tb03449.x](https://doi.org/10.1111/j.1528-1157.1984.tb03449.x) | [6086302](https://www.ncbi.nlm.nih.gov/pubmed/6086302) | metadata signals extractable PD data (IC50) |
| `Lassen_2015.pdf` | Lassen D et al., The Pharmacogenetics of Tramadol, Clinical pharmacokinetics (2015) | pgx | 8 | [10.1007/s40262-015-0268-0](https://doi.org/10.1007/s40262-015-0268-0) | [25910878](https://www.ncbi.nlm.nih.gov/pubmed/25910878) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Li_2023.pdf` | Li M et al., Effects of splicing-regulatory polymorp…, Cancer chemotherapy and pha… (2023) | pgx | 8 | [10.1007/s00280-022-04498-0](https://doi.org/10.1007/s00280-022-04498-0) | [36463535](https://www.ncbi.nlm.nih.gov/pubmed/36463535) | metadata signals extractable PGX data (ABCC2, PK/PD-context) |
| `Mukonzo_2011.pdf` | Mukonzo JK et al., HIV/AIDS patients display lower relativ…, Clinical pharmacokinetics (2011) | pgx | 8 | [10.2165/11592660-000000000-00000](https://doi.org/10.2165/11592660-000000000-00000) | [21740076](https://www.ncbi.nlm.nih.gov/pubmed/21740076) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Na_2021.pdf` | Na JY et al., Influence of CYP2C19 Polymorphisms on t…, Clinical pharmacology in dr… (2021) | pgx | 8 | [10.1002/cpdd.966](https://doi.org/10.1002/cpdd.966) | [34337876](https://www.ncbi.nlm.nih.gov/pubmed/34337876) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Xu_2024.pdf` | Xu C et al., Influence of UDP-Glucuronosyltransferas…, Transplantation proceedings (2024) | pgx | 8 | [10.1016/j.transproceed.2024.05.039](https://doi.org/10.1016/j.transproceed.2024.05.039) | [39054222](https://www.ncbi.nlm.nih.gov/pubmed/39054222) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Cerveny_2023.pdf` | Cerveny L et al., Assessment of the role of nucleoside tr…, Toxicology and applied phar… (2023) | pgx | 7 | [10.1016/j.taap.2023.116427](https://doi.org/10.1016/j.taap.2023.116427) | [36801311](https://www.ncbi.nlm.nih.gov/pubmed/36801311) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Chen_2022.pdf` | Chen X et al., Effect of fluconazole on the pharmacoki…, Cancer chemotherapy and pha… (2022) | pgx | 7 | [10.1007/s00280-021-04376-1](https://doi.org/10.1007/s00280-021-04376-1) | [34851444](https://www.ncbi.nlm.nih.gov/pubmed/34851444) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Funck-Brentano_2013.pdf` | Funck-Brentano C et al., Effects of rabeprazole on the antiplate…, Archives of cardiovascular… (2013) | pgx | 7 | [10.1016/j.acvd.2013.09.002](https://doi.org/10.1016/j.acvd.2013.09.002) | [24246616](https://www.ncbi.nlm.nih.gov/pubmed/24246616) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Kloth_2014.pdf` | Kloth JS et al., Predictive value of CYP3A and ABCB1 phe…, Clinical pharmacokinetics (2014) | pgx | 7 | [10.1007/s40262-013-0111-4](https://doi.org/10.1007/s40262-013-0111-4) | [24234588](https://www.ncbi.nlm.nih.gov/pubmed/24234588) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Knebel_2011.pdf` | Knebel W et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (2011) | pgx | 7 | [10.1177/0091270010363809](https://doi.org/10.1177/0091270010363809) | [20200269](https://www.ncbi.nlm.nih.gov/pubmed/20200269) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Michalets_2000.pdf` | Michalets EL et al., Drug interactions with cisapride: clini…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200039010-00004](https://doi.org/10.2165/00003088-200039010-00004) | [10926350](https://www.ncbi.nlm.nih.gov/pubmed/10926350) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Sam_2011.pdf` | Sam WJ et al., Associations of ABCB1 3435C&gt;T and IL-10…, Transplantation (2011) | pgx | 5 | [10.1097/TP.0b013e3182384ae2](https://doi.org/10.1097/TP.0b013e3182384ae2) | [22094953](https://www.ncbi.nlm.nih.gov/pubmed/22094953) | metadata signals extractable PGX data (ABCB1) |
| `Tsujimoto_2016.pdf` | Tsujimoto S et al., Influence of ADORA2A gene polymorphism…, Pediatric blood & cancer (2016) | pgx | 5 | [10.1002/pbc.26090](https://doi.org/10.1002/pbc.26090) | [27399166](https://www.ncbi.nlm.nih.gov/pubmed/27399166) | metadata signals extractable PGX data (ABCB1) |

<sub>queue written 2026-09-27T18:20:33.858287+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abbassy_2022 | not_relevant | 0 | 0 | The study investigates the association between ABCG2 polymorphisms and the risk of developing multiple myeloma, not the effect of the genotype on the pharmacokinetics or pharmacodynamics of adenosine. |
| PD | Abou-Taleb_2016 | not_relevant | 0 | 0 | The paper investigates the insecticidal properties of essential oils and their effects on enzymes (AChE, ATPases), not the pharmacodynamics of the drug adenosine. |
| PGx | Adolfsen_1976 | not_relevant | 0 | 0 | The paper describes the enzymology of ATPase in bacteria, not the pharmacokinetics or pharmacodynamics of adenosine in humans. |
| PGx | Alitalo_2023 | not_relevant | 0 | 0 | The paper investigates the mechanism of TrkB activation via hypothermia and metabolism, not the pharmacogenomics of adenosine. |
| popPK | Argüello_1990 | irrelevant | 0 | 0 | The study investigates the effects of phenoxyherbicides on calcium homeostasis in avian muscle, and adenosine is not the subject drug (only ATPase is mentioned). |
| PGx | Bakker_2025 | not_relevant | 0 | 0 | The paper describes a method for profiling protein-RNA interactions using an adenosine deaminase fusion, not the pharmacokinetics or pharmacodynamics of adenosine as a drug. |
| popPK | Baraldi_2007 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study reporting binding and functional assay data (EC50) for adenosine analogs, not a pharmacokinetic study with disposition parameters. |
| popPK | Barnes-Davies_1995 | irrelevant | 0 | 0 | The paper is a neurophysiological study of glutamate receptors where adenosine is only mentioned as a modulator of transmission, with no pharmacokinetic parameters reported. |
| PD | Barnes-Davies_1995 | not_relevant | 0 | 0 | The paper reports a dose-response curve for a glutamate receptor agonist (1S,3S-ACPD), but only provides a qualitative mention of adenosine without any numeric PD parameters or concentration-effect data. |
| popPK | Bauer_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of radiolabeled tariquidar and elacridar, not adenosine, which is only mentioned in the context of ATP-binding cassette transporters. |
| popPK | Beanlands_1995 | irrelevant | 0 | 0 | The study uses adenosine as a vasodilator agent to measure myocardial blood flow, not to characterize the pharmacokinetic parameters of adenosine itself. |
| popPK | Beukers_2004 | irrelevant | 0 | 0 | The paper describes the pharmacology of non-adenosine agonists for the A2B receptor and does not report pharmacokinetic parameters for adenosine. |
| popPK | Beukers_2006 | irrelevant | 0 | 0 | The paper is a review of structure-affinity relationships for adenosine A2B receptor ligands and contains no pharmacokinetic disposition parameters for adenosine. |
| PD | Beukers_2006 | not_relevant | 1 | 1 | The text is a review of structure-affinity relationships and lists binding affinities (Ki) and functional potencies (EC50) for various ligands, but it does not report a specific exposure-response or dose-response analysis for the drug adenosine itself with derivable PD parameters. |
| PD | Bianchi_1993 | not_relevant | 0 | 0 | The provided text is only a title describing defibrotide as an adenosine receptor agonist and contains no data, analysis, or numeric PD parameters. |
| PGx | Bleasby_2021 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions and metabolism of islatravir, not pharmacogenomic effects on adenosine. |
| PGx | Bloor_1985 | not_relevant | 0 | 0 | The study compares the hemodynamic effects of ATP and sodium nitroprusside in dogs but does not investigate any gene variants or pharmacogenomic factors. |
| popPK | Boldyrev_1982 | irrelevant | 0 | 0 | The paper studies the enzymatic kinetics of (Na+, K+)-ATPase hydrolyzing ATP and other nucleotides, not the pharmacokinetics of adenosine as a drug. |
| PD | Boldyrev_1982 | not_relevant | 0 | 0 | The paper describes the enzymatic kinetics of (Na+, K+)-ATPase hydrolyzing ATP and other nucleotides, not the pharmacodynamic response of the drug adenosine. |
| PGx | Bopape_2023 | not_relevant | 0 | 0 | The paper describes the genome of a rhizobial strain and mentions adenosine monophosphate in the context of bacterial metabolism, not human pharmacogenomics or drug PK/PD. |
| PGx | Bouchard_1993 | not_relevant | 0 | 0 | The paper reviews determinants of regional fat distribution and mentions adenosine only as a general regulator of lipolysis, without reporting any pharmacogenomic effects on adenosine PK or PD parameters. |
| PGx | Breitenstein_2015 | not_relevant | 0 | 0 | The paper studies metformin pharmacogenomics, not adenosine. |
| popPK | Brugós_2007 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of adenosine-induced relaxation in guinea-pig trachea, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Brunton_1977 | not_relevant | 0 | 0 | The paper studies cell hybridization and receptor expression for beta-adrenergic and PGE1 ligands, not the pharmacogenomics of adenosine drug metabolism or response. |
| PGx | Budi_2024 | not_relevant | 0 | 0 | The paper investigates ADSL gene polymorphisms in chickens and their effect on meat purine content, not the pharmacokinetics or pharmacodynamics of adenosine as a drug in humans. |
| popPK | Camberos_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ATP's inhibition of insulin-degrading enzyme, not a pharmacokinetic study of adenosine. |
| popPK | Camp_1998 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| popPK | Campos_2019 | irrelevant | 0 | 0 | no_text gate: only 145 chars of text extracted (&lt; 400) |
| PD | Campos_2019 | not_relevant | 0 | 0 | The paper focuses on the nitric oxide pathway in tortoise aortic rings and does not report any pharmacodynamic or exposure-response data for adenosine. |
| popPK | Cao_2022 | irrelevant | 0 | 0 | The paper studies the sorption of adenosine 5'-monophosphate (AMP) on marine sediments, which is an environmental chemistry study, not a pharmacokinetic study of adenosine. |
| PGx | Carson_1991 | not_relevant | 0 | 0 | The paper studies a cell line variant's resistance to deoxyadenosine toxicity via enzyme activity, not a human genetic variant's effect on the PK/PD of adenosine as a drug. |
| PGx | Cerveny_2023 | not_relevant | 0 | 0 | The paper investigates the placental transport mechanisms of entecavir, not the pharmacokinetics or pharmacodynamics of adenosine, and does not report pharmacogenomic effects. |
| popPK | Chan_1992 | irrelevant | 0 | 0 | The study measures myocardial blood flow (hemodynamics) rather than pharmacokinetic disposition parameters (CL, V, ka) for adenosine. |
| PGx | Chao_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of leech therapy in gouty rats and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of adenosine. |
| PGx | Chen_2022 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (fluconazole inhibiting CYP3A4) affecting fuzuloparib, not a pharmacogenomic effect on adenosine. |
| PGx | Chen_2023 | not_relevant | 0 | 0 | The paper studies the mechanism of a flavonoid extract on uric acid nephropathy and does not report any pharmacogenomic effects on the PK or PD of adenosine. |
| popPK | Chiao_1994 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the imaging tracer 99mTc-teboroxime, using adenosine only as a vasodilator agent to induce physiological changes, rather than reporting PK parameters for adenosine itself. |
| popPK | Chordia_2002 | irrelevant | 0 | 0 | The paper describes the synthesis and pharmacological activity (EC50) of allosteric enhancers for adenosine receptors, not the pharmacokinetics of adenosine itself. |
| PD | Coe_2017 | not_relevant | 0 | 0 | The paper investigates the physiological role of adenosine receptors in hypoxic hyperventilation in zebrafish using pharmacological antagonists, but it does not report a quantitative exposure-response or dose-response relationship with numeric PD parameters (e.g., EC50, Emax) for adenosine itself. |
| popPK | Cohen_1995 | irrelevant | 0 | 0 | The paper is a mechanistic study on cAMP binding to annexin I and does not report pharmacokinetic parameters for adenosine. |
| PD | Cohen_1995 | not_relevant | 0 | 0 | The paper studies the binding of cAMP to annexin I and its effect on membrane aggregation and ion channels, not the pharmacodynamics of the drug adenosine. |
| PGx | Collins_2023 | not_relevant | 0 | 0 | The paper investigates the regulation of drug-metabolizing enzymes by RNA-editing proteins, not the pharmacokinetics or pharmacodynamics of the drug adenosine. |
| popPK | Csóka_2012 | irrelevant | 0 | 0 | The paper is a mechanistic immunology study on macrophage activation and does not report any pharmacokinetic parameters for adenosine. |
| popPK | Daly_1983 | irrelevant | 0 | 0 | The paper is a mechanistic study of adenosine receptor subtypes and antagonist potency (IC50/Ki) in rat brain, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Danhof_1993 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | Danhof_1993 | not_relevant | 2 | 0 | The paper is a review of principles and perspectives in pre-clinical PK/PD modelling and does not report specific numeric PD parameters or extractable concentration-effect data for adenosine. |
| popPK | Darakjian_2019 | irrelevant | 0 | 0 | The study focuses on caffeine pharmacokinetics, and adenosine is only mentioned as a downstream pharmacodynamic mediator (cAMP/adenosine pathway) rather than the subject drug for PK parameter estimation. |
| PD | Darakjian_2019 | not_relevant | 4 | 2 | The paper describes a PBPK/PD model for caffeine (not adenosine) and mentions qualitative PD effects (enzyme inhibition, cAMP, epinephrine) but does not provide extractable numeric PD parameters or concentration-effect curves in the provided text. |
| popPK | Dayanikli_1994 | irrelevant | 0 | 0 | The study uses adenosine as a pharmacological vasodilator to assess coronary flow reserve, not to characterize the pharmacokinetic parameters of adenosine itself. |
| PD | De_2018 | not_relevant | 1 | 0 | The paper is a review of glucocorticoids in kidney transplant and does not report any pharmacodynamic or exposure-response data for adenosine. |
| popPK | Deharo_2025 | irrelevant | 0 | 0 | no_text gate: only 136 chars of text extracted (&lt; 400) |
| PD | Deharo_2025 | not_relevant | 0 | 0 | The paper focuses on the diagnostic utility of A2A receptor pharmacology for identifying patients with intermittent claudication and myocardial ischemia, rather than reporting a quantitative exposure-response or dose-response model with numeric PD parameters for adenosine. |
| popPK | Deharo_2026 | irrelevant | 0 | 0 | no_text gate: only 157 chars of text extracted (&lt; 400) |
| PD | Deharo_2026 | not_relevant | 0 | 0 | The paper investigates cAMP as a biomarker for ischemia-reperfusion in a clinical pilot study and does not report a pharmacodynamic model or numeric exposure-response parameters for adenosine. |
| popPK | Dickenson_1995 | irrelevant | 0 | 0 | no_text gate: only 146 chars of text extracted (&lt; 400) |
| PD | Dickenson_1995 | not_relevant | 0 | 0 | The paper investigates the mechanism of 5-HT1B receptor signaling in CHO-K1 cells and does not report any pharmacodynamic or exposure-response data for adenosine. |
| PGx | Ding_2025 | not_relevant | 0 | 0 | The paper focuses on the enantioselective metabolism of A2A receptor antagonists by CYP1A2, not on how genetic variants affect the PK/PD of adenosine itself. |
| popPK | Du_2012 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of an A3 adenosine receptor modulator on infarct size, not the pharmacokinetic disposition parameters of adenosine itself. |
| PGx | EVANS_1964 | not_relevant | 0 | 0 | The paper discusses acetylation polymorphism, which is unrelated to the pharmacokinetics or pharmacodynamics of adenosine. |
| PGx | Eadie_2014 | not_relevant | 0 | 0 | The paper discusses the interaction of tyrosine kinase inhibitors with efflux transporters, not the pharmacogenomics of adenosine. |
| PGx | Eidelman_1992 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of A1 antagonists in CF cells, not the effect of a gene variant on the PK/PD of adenosine itself. |
| popPK | Emani_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tirofiban, not adenosine. |
| PD | Fallot_2022 | not_relevant | 0 | 0 | The paper reports in vitro binding and functional assay data (Emax enhancement, EC50 trends) for synthetic analogues, not pharmacodynamic exposure-response or dose-response relationships for the drug adenosine in a biological system. |
| popPK | Feoktistov_1995 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study of adenosine receptor signaling in mast cells, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Forni_2015 | irrelevant | 0 | 0 | The paper is an evolutionary genetics study of ADAR genes and RNA editing, containing no pharmacokinetic data for adenosine. |
| PGx | Franko_2025 | not_relevant | 0 | 0 | The paper studies the effect of a chalcone compound on ABC transporter expression in cancer cells, not the pharmacogenomics of adenosine. |
| PGx | Frenkel-Pinter_2022 | not_relevant | 0 | 0 | The paper is a theoretical review on the evolution of small molecules (specifically adenosine) and does not report any pharmacogenomic studies or PK/PD data. |
| popPK | Frymoyer_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of theophylline, not adenosine, which is only mentioned as the mechanism of action for theophylline. |
| popPK | Frymoyer_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for theophylline (an adenosine receptor antagonist), not for adenosine itself. |
| PGx | Fukunaga_1982 | not_relevant | 0 | 0 | The paper compares the pharmacodynamic effects of adenosine, ATP, and sodium nitroprusside in rabbits but does not investigate any gene variants or pharmacogenomic factors. |
| PGx | Funck-Brentano_2013 | not_relevant | 0 | 0 | The paper studies a drug-drug interaction (rabeprazole/clopidogrel) and does not report pharmacogenomic effects on adenosine. |
| popPK | Furst_1993 | irrelevant | 0 | 0 | The paper is a review of methotrexate mechanisms and toxicities, mentioning adenosine only as a mediator of anti-inflammatory effects, with no pharmacokinetic parameters for adenosine reported. |
| PD | Furst_1993 | not_relevant | 2 | 2 | The text is a review of methotrexate that qualitatively mentions its effect on adenosine release with a cited EC50 range, but it does not report an original pharmacodynamic model, exposure-response analysis, or derivable PD curve for adenosine itself. |
| popPK | Gao_2008 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of allosteric modulation at adenosine receptors, not a pharmacokinetic study, and contains no disposition parameters for adenosine. |
| popPK | Getz_2020 | irrelevant | 0 | 0 | The paper is a mechanistic review of cAMP signaling pathways and does not report pharmacokinetic parameters for adenosine. |
| popPK | Gidday_1990 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of theophylline (a comparator/antagonist) and its effects on adenosine-induced hyperemia, rather than reporting quantitative disposition parameters for adenosine itself. |
| popPK | Grafeneder_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of clopidogrel and pantoprazole, using adenosine diphosphate (ADP) only as a diagnostic agent for platelet aggregation, not as the subject drug for PK parameter estimation. |
| PGx | Grafeneder_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of clopidogrel and its effect on ADP-induced platelet aggregation, but does not report pharmacokinetic or pharmacodynamic parameters of the drug adenosine itself. |
| PGx | Green_1980 | not_relevant | 0 | 0 | The paper studies adenosine transport in a cell line variant, not the pharmacokinetics or pharmacodynamics of adenosine as a drug in humans. |
| popPK | Guieu_2021 | irrelevant | 0 | 0 | The paper is a review of adenosine receptor physiology and pathology, containing no pharmacokinetic parameters or quantitative disposition data. |
| PD | Guieu_2021 | not_relevant | 1 | 0 | The text is a review discussing the concept of receptor reserve and adenosine physiology, but it does not report specific experimental data, numeric PD parameters, or extractable concentration-effect curves. |
| PGx | Gurbel_2013 | not_relevant | 0 | 0 | The study explicitly states that the effect on pharmacodynamics was independent of genotype, and the drug of interest is clopidogrel, not adenosine. |
| popPK | Gündel_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the radiotracer [18F]FLUDA, not the drug adenosine itself. |
| popPK | Haen_1992 | irrelevant | 0 | 0 | The study investigates beta-adrenergic receptor function and cAMP levels in atopic patients, not the pharmacokinetics of adenosine. |
| PD | Haen_1992 | not_relevant | 0 | 0 | The paper investigates the beta-adrenergic system and cAMP response to isoprenaline, not the pharmacodynamics of adenosine. |
| PGx | Hamaguchi_1992 | not_relevant | 0 | 0 | The paper studies hemodynamic effects of nitroprusside and nitroglycerin in dogs and does not report any pharmacogenomic effects on adenosine PK or PD. |
| popPK | Hayashi_1990 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding adenosine pharmacokinetics. |
| popPK | He_2019 | irrelevant | 0 | 0 | The study focuses on PET imaging methodology for A1 adenosine receptors using a radiotracer, not on the pharmacokinetic disposition parameters of adenosine itself. |
| popPK | Held_1999 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of airway and vascular responses in murine lungs, not a pharmacokinetic study, and reports no disposition parameters for adenosine. |
| PD | Held_1999 | not_relevant | 2 | 1 | The paper reports that adenosine had only weak effects (&lt;5% of methacholine) on airway resistance and no or very small effects on pulmonary artery pressure, but it does not provide specific numeric PD parameters (like EC50 or Emax) for adenosine, only qualitative or threshold-based descriptions. |
| PGx | Hewitt_2002 | not_relevant | 0 | 0 | The paper investigates troglitazone toxicity and metabolism, not the pharmacokinetics or pharmacodynamics of adenosine. |
| popPK | Hindel_2015 | irrelevant | 0 | 0 | The study uses adenosine as a vasodilator to induce blood flow changes for MRI perfusion validation, not as the subject drug for pharmacokinetic parameter estimation. |
| popPK | Hindel_2018 | irrelevant | 1 | 0 | Adenosine is used only as a vasodilator to augment blood flow for perfusion imaging, not as the subject drug for pharmacokinetic parameter estimation. |
| popPK | Ho_2019 | irrelevant | 0 | 0 | The paper is a study on the behavioral and transcriptomic responses of a marine snail to salinity stress and does not involve the drug adenosine or pharmacokinetic parameters. |
| popPK | Huang_2023 | irrelevant | 0 | 0 | The study focuses on MRI imaging techniques for myocardial perfusion, using adenosine only as a stress agent, and does not report pharmacokinetic parameters for adenosine itself. |
| popPK | Hubbard_2023 | irrelevant | 0 | 0 | The study focuses on validating a CT imaging technique for myocardial flow, using adenosine only as a stress agent rather than as the subject drug for pharmacokinetic analysis. |
| popPK | Hwang_2009 | irrelevant | 0 | 0 | The study uses adenosine as a vasodilator agent to measure myocardial blood flow via PET, not to characterize the pharmacokinetic parameters of adenosine itself. |
| PGx | Ikonnikova_2022 | not_relevant | 0 | 0 | The study investigates genetic associations with platelet reactivity to ADP (an agonist) and aspirin resistance, not the pharmacokinetics or pharmacodynamics of the drug adenosine. |
| popPK | Infeld_2021 | irrelevant | 0 | 0 | The study focuses on platelet reactivity to aspirin and ticagrelor, and adenosine diphosphate (ADP) is used only as an agonist for aggregation assays, not as the subject drug for pharmacokinetic analysis. |
| PD | Jarvis_1991 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding affinity (Kd, Bmax, IC50) for a radioligand, which is pharmacology/biochemistry, not pharmacodynamics (exposure-response or dose-response of a drug effect in a biological system). |
| PGx | Jasper_1990 | not_relevant | 0 | 0 | The paper studies beta-adrenergic receptor metabolism in cell lines, not the pharmacokinetics or pharmacodynamics of the drug adenosine. |
| PGx | Jiang_2022 | not_relevant | 0 | 0 | The paper investigates the pharmacological mechanism of gallic acid on uric acid metabolism and kidney injury in mice, with no mention of genetic variants or pharmacogenomics. |
| PGx | Jin_2026 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of a plant extract on uric acid homeostasis and does not report any pharmacogenomic effects (gene variants) on the PK or PD of adenosine. |
| popPK | Jovanović_1995 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of diadenosine-hexaphosphate (Ap6A) on ion channels in vitro, not the pharmacokinetics of adenosine. |
| popPK | Karellas_2008 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis of bivalent receptor ligands and reports in vitro binding affinities (Ki) and potency (EC50), not pharmacokinetic disposition parameters for adenosine. |
| popPK | Katoh_2004 | irrelevant | 0 | 0 | The study focuses on myocardial blood flow quantification using 15O-water PET, and adenosine is only mentioned as a hyperemic agent (likely adenosine triphosphate or adenosine infusion) rather than the subject of pharmacokinetic analysis. |
| PGx | Kim_2011 | not_relevant | 0 | 0 | The paper investigates the role of P-glycoprotein in chondrogenesis and glycosaminoglycan accumulation, not the pharmacokinetics or pharmacodynamics of adenosine as a drug. |
| popPK | Kloth_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of sunitinib, and adenosine is only mentioned as part of the acronym ABCB1 (adenosine triphosphate binding cassette B1), not as the subject drug. |
| PGx | Kloth_2014 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of sunitinib, not adenosine. |
| PGx | Knebel_2011 | not_relevant | 0 | 0 | The paper analyzes population PK of istradefylline (an adenosine antagonist) and identifies smoking and CYP3A4 inhibitors as covariates, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Koteiche_1995 | irrelevant | 0 | 0 | The paper is a mechanistic enzymology study using a spin-labeled adenosine analog as a structural probe for phosphoribulokinase, not a pharmacokinetic study of adenosine. |
| PD | Koteiche_1995 | not_relevant | 0 | 0 | The paper describes the binding kinetics of a spin-labeled ATP analog to an enzyme (phosphoribulokinase) in vitro, not a pharmacodynamic exposure-response relationship for the drug adenosine in a biological system. |
| PGx | Kukal_2021 | not_relevant | 0 | 0 | The paper is a review of ABCG2 transporter regulation and does not report specific pharmacogenomic effects on the PK or PD of adenosine. |
| PGx | Laine_2012 | not_relevant | 0 | 0 | The paper is a review of P2Y12 ADP receptor antagonists (drugs) and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of the endogenous ligand adenosine. |
| popPK | Lancé_2013 | irrelevant | 0 | 0 | The study investigates pre-analytical variables in platelet function analysis using ADP as a trigger, not the pharmacokinetics of adenosine. |
| popPK | Lasne_2023 | irrelevant | 0 | 0 | The study focuses on anti-Xa assays for unfractionated heparin, and adenosine is only mentioned as a component of the CTAD blood collection tube, not as the subject drug for PK analysis. |
| popPK | Lassen_2015 | irrelevant | 0 | 0 | The paper is a review of tramadol pharmacogenetics, not a pharmacokinetic study of adenosine. |
| PGx | Lassen_2015 | not_relevant | 0 | 0 | The paper discusses the pharmacogenetics of Tramadol, not Adenosine. |
| PGx | Leach_2001 | not_relevant | 0 | 0 | The paper studies the regulation of mRNA methyltransferase gene expression by methionine depletion, not the pharmacokinetics or pharmacodynamics of adenosine as a drug. |
| popPK | Lewis_2006 | irrelevant | 0 | 0 | The study is mechanistic, focusing on adenosine's role in gap junction communication and cell signaling, and does not report pharmacokinetic disposition parameters. |
| PGx | Li_2022 | not_relevant | 0 | 0 | The paper reports on a ruthenium complex's mechanism of action involving ATP depletion, not a pharmacogenomic effect on the PK/PD of adenosine. |
| PGx | Li_2023 | not_relevant | 0 | 0 | The paper investigates pharmacogenomics of methotrexate, not adenosine. |
| PGx | Li_2024 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on clopidogrel, not adenosine. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The study focuses on neural progenitor cell transplantation and imaging, using adenosine only as a component of a delivery probe, with no pharmacokinetic parameters reported. |
| PGx | Liang_2021 | not_relevant | 0 | 0 | The paper investigates the effect of photodynamic therapy on ABC transporter function, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of adenosine. |
| PGx | Liang_2025 | not_relevant | 0 | 0 | The paper investigates the association between the ABCG2 gene and hyperuricemia (a disease state), not the pharmacokinetics or pharmacodynamics of adenosine as a drug. |
| PGx | Lincoln_1975 | not_relevant | 0 | 0 | The paper investigates the role of cyclic AMP in melanoma cell transformation and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of adenosine as a drug. |
| PD | Lindell_1999 | not_relevant | 3 | 2 | The paper reports a single IC50 value for a specific inhibitor of an enzyme (AMPDA), which is a biochemical potency metric, not a pharmacodynamic exposure-response or dose-response relationship for the drug adenosine itself in a biological system. |
| PGx | Lipiński_2022 | not_relevant | 0 | 0 | The paper reports a genetic deficiency of an endogenous enzyme (ADK) affecting metabolic parameters, not a pharmacogenomic effect on the PK/PD of an administered drug. |
| popPK | Lubberink_2010 | irrelevant | 1 | 0 | The study uses adenosine as a vasodilator stress agent to measure myocardial blood flow, not to characterize the pharmacokinetic parameters (CL, V, etc.) of adenosine itself. |
| PGx | Luebke_1991 | not_relevant | 0 | 0 | The paper investigates the immunological effects of an adenosine deaminase inhibitor on malaria infection in mice, not the pharmacokinetics or pharmacodynamics of adenosine itself in relation to genetic variants. |
| PGx | Lundström_1989 | not_relevant | 0 | 0 | The paper studies the effect of halothane genotype on muscle metabolism and meat quality, not the pharmacokinetics or pharmacodynamics of adenosine. |
| popPK | López-Serrano_2022 | irrelevant | 0 | 0 | The paper is an electrophysiological study of receptor voltage dependence and does not report pharmacokinetic parameters (CL, V, etc.) for adenosine. |
| PGx | Malý_2014 | not_relevant | 0 | 0 | The paper reports a genetic mutation in ABCA3 causing a surfactant metabolism disorder, not a pharmacogenomic effect on the PK/PD of the drug adenosine. |
| PGx | Mammoliti_2024 | not_relevant | 0 | 0 | The paper describes the discovery and clinical development of a TYK2 inhibitor, not the pharmacogenomics of adenosine. |
| PGx | Marquez_2025 | not_relevant | 0 | 0 | The paper discusses mitochondrial disease and polyamine metabolism, not the pharmacokinetics or pharmacodynamics of adenosine. |
| PD | Mathôt_1994 | not_relevant | 3 | 5 | The paper reports binding affinities (IC50) for enantiomers of PIA, which are pharmacological potency metrics, but does not report a pharmacodynamic exposure-response or dose-response relationship for adenosine itself or a PK/PD model. |
| popPK | Mathôt_1995 | irrelevant | 0 | 0 | The study focuses on deoxyribose analogues of CPA (adenosine receptor agonists) rather than adenosine itself, and does not report PK parameters for adenosine. |
| popPK | McCommis_2010 | irrelevant | 0 | 0 | The study uses adenosine as a vasodilator agent to induce hyperemia for myocardial oxygenation imaging, not as the subject drug for pharmacokinetic analysis. |
| PGx | McIntyre_1985 | not_relevant | 2 | 0 | The paper discusses general CNS depressant sensitivity in mouse lines, not a specific pharmacogenomic effect on the PK or PD parameters of adenosine. |
| PD | Mediero_2015 | not_relevant | 3 | 2 | The paper reports single-dose efficacy comparisons and antagonist blockade, but does not provide a concentration-effect curve or numeric PD parameters (Emax, EC50 for the effect) for adenosine or its analogs in this context. |
| PGx | Mendelson_1974 | not_relevant | 0 | 0 | The paper studies Bacillus subtilis minicells and ATP metabolism, not human pharmacogenomics or adenosine drug PK/PD. |
| popPK | Meyer_2005 | irrelevant | 0 | 0 | The study focuses on PET quantification of A1 adenosine receptors using the radioligand [18F]CPFPX, not the pharmacokinetics of the drug adenosine itself. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (CYP3A4 inhibition and QT prolongation) involving cisapride and adenosine, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Mierzejewska_2024 | not_relevant | 0 | 0 | The paper investigates the effect of a metabolite (4PYR) on drug efficacy and enzyme levels, but does not report a pharmacogenomic effect (gene variant/genotype) on the PK or PD of adenosine. |
| popPK | Migliavacca_2024 | irrelevant | 0 | 0 | The paper focuses on the safety and efficacy of gene therapy for adenosine deaminase deficiency, not the pharmacokinetics of adenosine as a drug. |
| PGx | Miller_1995 | not_relevant | 0 | 0 | The paper discusses apolipoprotein E mutations and lipid metabolism, not the pharmacokinetics or pharmacodynamics of the drug adenosine. |
| PGx | Minko_2013 | not_relevant | 0 | 0 | The paper is a review on nanotechnology for multidrug resistance and does not report pharmacogenomic effects on adenosine PK/PD. |
| popPK | Monk_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of niraparib, not adenosine. |
| PD | Monk_2024 | not_relevant | 4 | 2 | The paper reports population PK and exposure-response analyses for niraparib (a PARP inhibitor), not adenosine; while it mentions adenosine diphosphate (ADP) in the drug's mechanism, it does not provide PD parameters for adenosine itself. |
| popPK | Moser_2018 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| PD | Moser_2018 | not_relevant | 0 | 0 | The paper analyzes Prasugrel, not adenosine. |
| PD | Mu_2026 | not_relevant | 1 | 0 | The text is a review article summarizing mechanisms and translational strategies for the cGAMP-ENPP1 axis and does not report specific numeric PD parameters or exposure-response data for adenosine. |
| popPK | Mudgal_2020 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Mudgal_2020 | not_relevant | 0 | 0 | The paper describes the antiviral mechanism of an adenosine analog against Chikungunya virus, not a pharmacodynamic exposure-response or dose-response relationship for the drug adenosine in a clinical or physiological context. |
| popPK | Mukonzo_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of efavirenz, and adenosine is only mentioned in the context of the ABCB1 transporter gene, not as the subject drug. |
| PGx | Mukonzo_2011 | not_relevant | 0 | 0 | The paper investigates the effect of HIV/AIDS disease and sex on efavirenz pharmacokinetics, not the effect of a gene variant on adenosine. |
| popPK | Munemura_1980 | irrelevant | 0 | 0 | The study investigates the mechanism of alpha-MSH release in rat pituitary cells and does not report pharmacokinetic parameters for adenosine. |
| PD | Munemura_1980 | not_relevant | 0 | 0 | The paper reports an EC50 for isoproterenol (a catecholamine), not for adenosine; adenosine is only mentioned in the title as a potential factor, with no numeric PD parameters or concentration-effect data provided for it. |
| popPK | Müllauer_2013 | irrelevant | 0 | 0 | The study focuses on P-glycoprotein expression using radiotracers (elacridar, tariquidar, verapamil) and does not report pharmacokinetic parameters for adenosine. |
| PGx | Na_2021 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on omeprazole, not adenosine. |
| PGx | Nagase_2021 | not_relevant | 0 | 0 | The paper discusses mitochondrial DNA mutations and cancer therapy, not the pharmacogenomics of adenosine. |
| popPK | Nakamura_2007 | irrelevant | 0 | 0 | The paper describes the synthesis of oligoadenylate analogs and their biochemical activity (RNase L activation), not the pharmacokinetics of adenosine. |
| popPK | Newby_1986 | irrelevant | 2 | 0 | The paper presents a theoretical mathematical model of adenosine formation and inactivation to explain dipyridamole's mechanism, rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) from experimental data. |
| PGx | Niemi_2010 | not_relevant | 0 | 0 | The paper discusses pharmacogenetics of statins and mentions ATP-binding cassette transporters, but does not report a pharmacogenomic effect on the PK/PD of the drug adenosine. |
| popPK | Occhipinti_2010 | irrelevant | 0 | 0 | The paper is a computational model of neuronal energetics and GABA metabolism, not a pharmacokinetic study of adenosine. |
| PGx | Ofoegbu_2021 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics of morphine, not adenosine. |
| popPK | Pan_2021 | irrelevant | 0 | 0 | The study uses adenosine as a diagnostic stress agent for cardiovascular MRI and reports diagnostic accuracy metrics, not pharmacokinetic parameters. |
| popPK | Pastula_2012 | irrelevant | 0 | 0 | The paper is a systematic review of creatine for ALS, not a pharmacokinetic study of adenosine. |
| popPK | Paul_2014 | irrelevant | 0 | 0 | The study investigates adenosine A1 receptor expression using a PET tracer, not the pharmacokinetics of adenosine itself. |
| popPK | Pejman_2014 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | Pejman_2014 | not_relevant | 0 | 0 | The paper investigates the effect of thymoquinone on adenosine receptors, not the pharmacodynamic or exposure-response relationship of adenosine itself. |
| popPK | Pelleg_1992 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of the antagonist N0861, not adenosine, which is used only as a probe drug to assess receptor effects. |
| PGx | Peters_1993 | not_relevant | 0 | 0 | The paper is a general review of anti-metabolites and does not report specific pharmacogenomic effects on the PK or PD of adenosine. |
| PGx | Pietrzak-Nowacka_2025 | not_relevant | 0 | 0 | The paper investigates the association of AMPD1 polymorphisms with clinical and biochemical parameters (BMI, lipids) in diabetic patients, not the pharmacokinetics or pharmacodynamics of adenosine as a drug. |
| PGx | Pilkington_1992 | not_relevant | 0 | 0 | The paper reviews the pharmacology of acitretin and does not report any pharmacogenomic effects on the PK or PD of adenosine. |
| PGx | Pjevac_2026 | not_relevant | 0 | 0 | The study investigates genetic associations with schizophrenia risk and treatment resistance, not the pharmacokinetic or pharmacodynamic parameters of adenosine. |
| popPK | Popovic_2010 | irrelevant | 0 | 0 | The paper investigates the biochemical interaction of IRP-1 with ATP/ADP and is not a pharmacokinetic study of adenosine. |
| PD | Popovic_2010 | not_relevant | 0 | 0 | The paper describes biochemical binding and enzymatic kinetics of IRP-1 with ATP/ADP, not a pharmacodynamic exposure-response relationship for the drug adenosine. |
| popPK | Pottie_2023 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study of adenosine receptor ligands and does not report pharmacokinetic parameters for adenosine. |
| popPK | Prasad_2022 | irrelevant | 0 | 0 | The study focuses on PET binding parameters (BPND, k3/k4) for the tracer [11C]raclopride, not the pharmacokinetic disposition parameters (CL, V, t1/2) of adenosine itself. |
| PGx | Prytuła_2016 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on tacrolimus pharmacokinetics, not adenosine. |
| PD | Pullarkat_2024 | not_relevant | 0 | 0 | The paper is a Phase 1 trial evaluating safety and pharmacokinetics of 8-chloro-adenosine, with no reported pharmacodynamic modeling or exposure-response analysis. |
| PGx | Racil_2011 | not_relevant | 0 | 0 | The paper assesses ABCB1 mRNA expression in CML patients but does not report pharmacokinetic or pharmacodynamic parameters of adenosine. |
| PGx | Ramos-Jiménez_2022 | not_relevant | 0 | 0 | The paper reviews FAT/CD36 in lipid metabolism and does not mention adenosine or its pharmacokinetics/pharmacodynamics. |
| popPK | Raugi_1975 | irrelevant | 0 | 0 | The paper studies intermediate metabolism in Tetrahymena and mentions adenosine only in the context of ATP/ADP ratios, not as a subject drug for pharmacokinetic analysis. |
| PGx | Rosen_1979 | not_relevant | 0 | 0 | The paper studies cell line variants defective in adenylate cyclase/protein kinase and their response to cAMP analogs, not the pharmacogenomics of adenosine drug metabolism or action. |
| popPK | Rostami_2026 | irrelevant | 0 | 0 | The study investigates the therapeutic effect of D-ribose on wound healing in a rabbit model and does not report any pharmacokinetic parameters for adenosine. |
| popPK | Sakata_2017 | irrelevant | 0 | 0 | The study evaluates the PET tracer 11C-preladenant (an adenosine A2A receptor antagonist), not the drug adenosine itself, and reports imaging parameters (DVR, dosimetry) rather than pharmacokinetic disposition parameters for adenosine. |
| popPK | Sam_2011 | irrelevant | 0 | 0 | no_text gate: only 133 chars of text extracted (&lt; 400) |
| PGx | Sam_2011 | not_relevant | 0 | 0 | The paper investigates sirolimus pharmacogenomics, not adenosine. |
| popPK | Sato_2016 | irrelevant | 0 | 0 | The paper describes the synthesis and pharmacological activity (EC50) of a cyclic ADP-ribose analogue, not the pharmacokinetics of adenosine. |
| popPK | Schaddelee_2004 | irrelevant | 0 | 0 | The study investigates 5'-deoxy-N6-cyclopentyladenosine (5'dCPA), a different drug, rather than adenosine itself. |
| popPK | Schoknecht_2017 | irrelevant | 0 | 0 | The study is an in-vitro metabolic analysis of oxygen and ATP consumption in rat hippocampal slices, not a pharmacokinetic study of adenosine disposition. |
| popPK | Scholtens_2011 | irrelevant | 0 | 0 | The study uses adenosine as a pharmacological stress agent for PET imaging and does not report pharmacokinetic parameters (CL, V, etc.) for adenosine itself. |
| PGx | Scuderi_2025 | not_relevant | 0 | 0 | The paper discusses colchicine pharmacogenomics (ABCB1), not adenosine. |
| popPK | Sellami_1976 | irrelevant | 0 | 0 | The paper studies adenine nucleotide energy charge in wheat leaves, not the pharmacokinetics of the drug adenosine. |
| popPK | Serpa_2014 | irrelevant | 0 | 0 | The study is a mechanistic investigation of adenosine A1 receptor signaling and cGMP accumulation in hippocampal slices, not a pharmacokinetic study reporting disposition parameters for adenosine. |
| PD | Serpa_2014 | not_relevant | 0 | 0 | not captured |
| popPK | Sharma_2012 | irrelevant | 2 | 0 | The paper describes a method validation for adenosine analysis and mentions a PK/PD study scope, but provides no quantitative pharmacokinetic parameter values (CL, V, etc.) for adenosine. |
| PD | Sharma_2012 | not_relevant | 0 | 0 | The text describes the development and validation of an LC-MS/MS assay for adenosine and mentions its scope for a PK/PD study, but it does not report any actual pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| PGx | Shi_2025 | not_relevant | 0 | 0 | The paper is a review of metabolic disorders (ADSL, Lesch-Nyhan, ATIC deficiency) and does not report pharmacogenomic effects on the PK/PD of adenosine as a drug. |
| PGx | Sidhu_1995 | not_relevant | 0 | 0 | The paper investigates the effect of cAMP on phenobarbital-induced CYP gene expression, not the pharmacokinetics or pharmacodynamics of adenosine itself. |
| popPK | Siller-Matula_2010 | irrelevant | 0 | 0 | The paper is a review of antiplatelet drugs and does not report pharmacokinetic parameters for adenosine. |
| PD | Siller-Matula_2010 | not_relevant | 1 | 0 | The text is a qualitative review of various antiplatelet drugs and does not contain specific numeric PD parameters or exposure-response data for adenosine. |
| PGx | Simon_2010 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics of P2Y12 inhibitors (like clopidogrel), not the pharmacokinetics or pharmacodynamics of adenosine itself. |
| PGx | Siokas_2022 | not_relevant | 0 | 0 | The study investigates the association of genetic variants with Alzheimer's disease risk, not the effect of these variants on the pharmacokinetics or pharmacodynamics of adenosine. |
| PGx | Spears_1995 | not_relevant | 0 | 0 | The paper discusses antimetabolites and mentions adenosine deaminase inhibitors only as a class of drugs, but does not report pharmacogenomic effects on the PK/PD of adenosine itself. |
| PGx | Sprengell_2021 | not_relevant | 0 | 0 | The paper is a systematic review on cerebral energy metabolism in diabetes and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of adenosine. |
| popPK | Stepanov_2018 | irrelevant | 0 | 0 | The study focuses on the development and evaluation of PET radioligands for PDE10A, not the pharmacokinetics of adenosine itself. |
| popPK | Tayama_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of KW-6356, an adenosine receptor antagonist, rather than adenosine itself as the subject drug. |
| popPK | Teng_2012 | irrelevant | 0 | 0 | The paper is a review of the pharmacokinetics of ticagrelor, not adenosine, and adenosine is only mentioned in the context of P2Y12 receptor pathophysiology. |
| PD | Teng_2012 | not_relevant | 1 | 0 | The text is a qualitative review summarizing the PK/PD profile of ticagrelor without providing specific numeric PD parameters or extractable concentration-effect curves. |
| popPK | Teng_2015 | irrelevant | 0 | 0 | The paper is a review of ticagrelor pharmacokinetics, and adenosine is only mentioned as a mechanism of action or side effect, not as the subject drug with reported PK parameters. |
| PD | Teng_2015 | not_relevant | 3 | 1 | The paper is a review that qualitatively discusses ticagrelor's effect on adenosine and mentions a sigmoid Emax model for platelet aggregation in a figure caption, but it does not provide numeric PD parameters or an extractable concentration-effect curve for adenosine. |
| PGx | Theodosopoulou_2023 | not_relevant | 0 | 0 | The paper discusses pharmacogenetics of 5HT3 antagonists (e.g., ondansetron), not the drug adenosine. |
| popPK | Thompson_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of caffeine, not adenosine, which is only mentioned as a mechanistic context. |
| popPK | Tomiyama_2015 | irrelevant | 0 | 0 | The study uses adenosine triphosphate (ATP) as a vasodilator for perfusion imaging validation, not adenosine as the subject drug for pharmacokinetic parameter estimation. |
| PGx | Tournier_2025 | not_relevant | 0 | 0 | The paper discusses PET radiotracers for imaging P-glycoprotein at the blood-brain barrier and does not report pharmacogenomic effects on the PK/PD of adenosine. |
| popPK | Toyohara_2022 | irrelevant | 0 | 0 | The study evaluates the reproducibility of PET imaging for adenosine A2A receptors using the radioligand [11C]preladenant, not the pharmacokinetics of the drug adenosine itself. |
| PGx | Trelford_2024 | not_relevant | 0 | 0 | The paper is a review of LKB1 biology and does not report pharmacogenomic effects on the PK/PD of adenosine. |
| PGx | Tsujimoto_2016 | not_relevant | 0 | 0 | The paper reports an association between an ADORA2A polymorphism and the clinical outcome of leukoencephalopathy, not a change in the pharmacokinetic or pharmacodynamic parameters of adenosine itself. |
| PGx | Turner_1985 | not_relevant | 0 | 0 | The paper discusses plant metabolism of zeatin in beans, not human pharmacogenomics or adenosine pharmacokinetics. |
| popPK | Uematsu_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of vapiprost, not adenosine, which is only mentioned as a platelet aggregation inducer. |
| popPK | Uematsu_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of CS-518, a thromboxane synthase inhibitor, and uses adenosine diphosphate (ADP) only as an ex vivo agonist for platelet aggregation assays, not as the subject drug for PK analysis. |
| popPK | Van_1997 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic modeling of adenosine receptor agonists (CPA analogues) rather than the pharmacokinetic disposition parameters of adenosine itself. |
| PD | Van_1997 | not_relevant | 4 | 0 | The text describes a method for estimating PD parameters (affinity, efficacy) for CPA analogues but does not provide the specific numeric values or curves for adenosine itself in this excerpt. |
| PGx | Velky_1987 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of hemoglobin variants (SFH and ATP-SFH) in rats, not the pharmacogenomics of adenosine. |
| popPK | Wakabayashi_2022 | irrelevant | 0 | 0 | The study evaluates the PET radioligand 18F-PF-06445974 for PDE4B imaging, not the pharmacokinetics of the drug adenosine. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper discusses ABC transporters (adenosine triphosphate-binding cassette) and multidrug resistance, not the pharmacokinetics or pharmacodynamics of the drug adenosine. |
| PGx | Wang_2023 | not_relevant | 0 | 0 | The paper studies heat stress in broilers and mentions ABCG2 (a transporter) expression, but does not report a pharmacogenomic effect on the PK/PD of adenosine as a drug. |
| popPK | Warhurst_1995 | irrelevant | 0 | 0 | The paper investigates somatostatin receptor expression and chloride secretion in colonocytes, where adenosine is only mentioned as part of the cAMP pathway, not as a subject drug for pharmacokinetic analysis. |
| popPK | Watabe_2005 | irrelevant | 0 | 0 | The study focuses on myocardial blood flow imaging using 15O-water, with adenosine used only as a vasodilator agent to increase flow, not as the subject of pharmacokinetic analysis. |
| popPK | Wataya_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nucleoside analogues' anti-parasitic activity and does not report pharmacokinetic parameters for adenosine. |
| PGx | Wei_2026 | not_relevant | 0 | 0 | The paper describes a drug delivery system (polymeric micelles) for doxorubicin and does not report any pharmacogenomic effects of gene variants on the PK or PD of adenosine. |
| PD | Wiechmann_2015 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50/IC50) for hyperforin and myrtucommulone A, not for adenosine. |
| PGx | Williams_1978 | not_relevant | 0 | 0 | The paper describes cellular resistance to 8-azaguanine due to HGPRTase deficiency and does not report pharmacogenomic effects on the PK or PD of adenosine. |
| popPK | Wright_1998 | irrelevant | 0 | 0 | no_text gate: only 310 chars of text extracted (&lt; 400) |
| PD | Wright_1998 | not_relevant | 3 | 2 | The paper reports receptor binding affinity (EC50) for a specific analog, which is a pharmacological potency metric, but does not report a pharmacodynamic exposure-response or dose-response relationship for the drug adenosine itself in a physiological or clinical context. |
| PGx | Xu_2024 | not_relevant | 0 | 0 | The study investigates the pharmacogenomics of mycophenolic acid, not adenosine. |
| PGx | Yang_2023 | not_relevant | 0 | 0 | The paper investigates genetic associations with neural tube defects and folate metabolism markers, not the pharmacokinetics or pharmacodynamics of adenosine. |
| PGx | Yellin_1975 | not_relevant | 0 | 0 | The paper discusses histochemical characterization of muscle fiber types and neuroregulation, not pharmacogenomics or PK/PD parameters of adenosine. |
| popPK | Young_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the PET radiotracer 18F-fluorthanatrace, not the drug adenosine. |
| popPK | Young_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the radiotracer 18F-FTT (a rucaparib analog), not the drug adenosine. |
| PGx | Zeng_2023 | not_relevant | 0 | 0 | The paper investigates the prognostic value of ADARB1 polymorphisms in HCC patients treated with TACE, focusing on survival and oxaliplatin efficacy, but does not report pharmacokinetic or pharmacodynamic parameters for adenosine. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of eltrombopag, not adenosine, which is only mentioned as a transporter (ABCG2) involved in eltrombopag clearance. |
| PGx | Zhang_2024 | not_relevant | 2 | 5 | The paper reports a pharmacogenomic effect (ABCG2 variant) on the PK of eltrombopag, not adenosine. |
| popPK | Zheng_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of clopidogrel, and adenosine is only mentioned as adenosine diphosphate (ADP) in the context of platelet aggregation assays, not as the subject drug for PK analysis. |
| popPK | Zhou_2017 | irrelevant | 0 | 0 | The study evaluates the PET tracer 11C-preladenant for imaging adenosine receptors, not the pharmacokinetics of the drug adenosine itself. |
| PGx | Zhou_2024 | not_relevant | 0 | 0 | The paper investigates the anti-hyperuricemia mechanism of an herbal extract in rats and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of adenosine. |
| PGx | Zou_2021 | not_relevant | 0 | 0 | The paper investigates the mechanism of rutaecarpine reversing multidrug resistance via ABCB1 degradation and does not report pharmacogenomic effects on adenosine PK/PD parameters. |
| PGx | Čižmáriková_2025 | not_relevant | 0 | 0 | The paper discusses ABC transporters and multidrug resistance mechanisms, not the pharmacokinetics or pharmacodynamics of the drug adenosine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>

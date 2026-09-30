<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07F&quot;,&quot;href&quot;:&quot;atc/C07F.md&quot;},{&quot;label&quot;:&quot;felodipine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Felodipine_Yang1998_reference&quot;,&quot;label&quot;:&quot;Yang_1998_reference&quot;,&quot;href&quot;:&quot;drugs/drug_felodipine/Felodipine_Yang1998_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# felodipine

- **generic name:** felodipine
- **ATC codes:** `C07FB02`, `C08CA02`, `C09BB05`
- **DrugBank:** [DB01023](https://go.drugbank.com/drugs/DB01023) · **PubChem:** [CID 3333](https://pubchem.ncbi.nlm.nih.gov/compound/3333)
- **molar mass:** 384.254 g/mol (C18H19Cl2NO4) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Felodipine is a long-acting 1,4-dihydropyridine calcium channel blocker (CCB)b. It acts primarily on vascular smooth muscle cells by stabilizing voltage-gated L-type calcium channels in their inactive conformation. By inhibiting the influx of calcium in smooth muscle cells, felodipine prevents calcium-dependent myocyte contraction and vasoconstriction. Felodipine is the most potent CCB in use and is unique in that it exhibits fluorescent activity. In addition to binding to L-type calcium channels, felodipine binds to a number of calcium-binding proteins, exhibits competitive antagonism of the mineralcorticoid receptor, inhibits the activity of calmodulin-dependent cyclic nucleotide phosphodiesterase, and blocks calcium influx through voltage-gated T-type calcium channels. Felodipine is used to treat mild to moderate essential hypertension.

**Indication.** For the treatment of mild to moderate essential hypertension.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| felodipine | parent | 384.254 | C18H19Cl2NO4 | DrugBank | [3333](https://pubchem.ncbi.nlm.nih.gov/compound/3333) | Yang_1998 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 06:13 | 1:23:06 | 0/1/0 | 0/0/0 | 0/0/0 | 99,547/11,726 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 4/1 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Yang_1998_reference](drugs/drug_felodipine/Felodipine_Yang1998_reference.md) | — | 1-compartment (no model) | 6 | Yang L et al., [Determination of felodipine concentrat…, Yao xue xue bao = Acta phar… (1998) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=felodipine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | brain | <sub>“…nimal studies have demonstrated that felodipine crosses the blood-brain barrier and the pl…”</sub> | prose |
| excretion | kidney | <sub>“…the metabolites are present in the plasma due to decreased urinary excretion, these are in…”</sub> | prose |
| excretion | liver | `ABCB11` substrate | DrugBank actor |
| excretion | placenta | <sub>“…ted that felodipine crosses the blood-brain barrier and the placenta.…”</sub> | prose |

<sub>Actors without a tissue in the table: CACNA1C (inhibitor), CACNA1D (inhibitor), CACNA1H (inhibitor), CACNA1S (inhibitor), CACNA2D1 (inhibitor), CACNA2D2 (inhibitor), CACNB2 (inhibitor), CALM1 (other), NR3C2 (target), PDE1A (inhibitor), PDE1B (inhibitor), TNNC1 (other), TNNC2 (other).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 341 matched, 139 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_43 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Edgar_1987.pdf` | Edgar B et al., Pharmacokinetic and pharmacodynamic stu…, Biopharmaceutics & drug dis… (1987) | popPK | 10 | [10.1002/bdd.2510080305](https://doi.org/10.1002/bdd.2510080305) | [3593901](https://pubmed.ncbi.nlm.nih.gov/3593901) | The paper describes a PK study of felodipine with a two-compartment model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Fuhr_2022.pdf` | Fuhr LM et al., A Physiologically Based Pharmacokinetic…, Pharmaceutics (2022) | popPK | 10 | [10.3390/pharmaceutics14071474](https://doi.org/10.3390/pharmaceutics14071474) | [35890369](https://pubmed.ncbi.nlm.nih.gov/35890369) | The paper describes a PBPK model for felodipine, but the specific numeric parameter values are not present in the provided evidence text. |
| `Yang_1998.pdf` | Yang L et al., [Determination of felodipine concentrat…, Yao xue xue bao = Acta phar… (1998) | popPK | 10 | not captured | [12016918](https://pubmed.ncbi.nlm.nih.gov/12016918) | The paper reports quantitative pharmacokinetic parameters (half-lives, Cmax, Tmax, AUC) for felodipine in humans, with values explicitly listed in the text. |
| `Blychert_1992_2.pdf` | Blychert E, Felodipine pharmacokinetics and plasma…, Blood pressure. Supplement (1992) | popPK | 8 | not captured | [1343111](https://pubmed.ncbi.nlm.nih.gov/1343111) | The study reports qualitative PK trends (e.g., increased half-life with age) but lacks specific numeric parameter values in the provided abstract. |
| `Zhao_2016.pdf` | Zhao S et al., Synchronous delivery of felodipine and…, Drug development and indust… (2016) | popPK | 8 | [10.3109/03639045.2016.1171332](https://doi.org/10.3109/03639045.2016.1171332) | [27074758](https://pubmed.ncbi.nlm.nih.gov/27074758) | The study reports pharmacokinetic parameters for felodipine in beagles, but the specific numeric values are not present in the provided evidence text. |
| `Blychert_1992.pdf` | Blychert E et al., Plasma concentration--effect relationsh…, Clinical pharmacology and t… (1992) | pd | 5 | [10.1038/clpt.1992.105](https://doi.org/10.1038/clpt.1992.105) | [1385566](https://www.ncbi.nlm.nih.gov/pubmed/1385566) | metadata signals extractable PD data (Emax) |
| `Ericsson_1999.pdf` | Ericsson H et al., Pharmacokinetics of new calcium channel…, Drug metabolism and disposi… (1999) | pd | 5 | not captured | [10220482](https://www.ncbi.nlm.nih.gov/pubmed/10220482) | metadata signals extractable PD data (Emax) |
| `Larsson_1990.pdf` | Larsson R et al., Acute and steady-state pharmacokinetics…, Journal of clinical pharmac… (1990) | pd | 5 | [10.1002/j.1552-4604.1990.tb03589.x](https://doi.org/10.1002/j.1552-4604.1990.tb03589.x) | [2243149](https://www.ncbi.nlm.nih.gov/pubmed/2243149) | metadata signals extractable PD data (Emax) |
| `Li_2026.pdf` | Li W et al., Drug-drug interactions between lopinavi…, Biochemical pharmacology (2026) | pd | 5 | [10.1016/j.bcp.2026.118012](https://doi.org/10.1016/j.bcp.2026.118012) | [42055143](https://www.ncbi.nlm.nih.gov/pubmed/42055143) | metadata signals extractable PD data (IC50) |
| `Soons_1993.pdf` | Soons PA et al., Comparative effects of felodipine, nitr…, European journal of clinica… (1993) | pd | 5 | [10.1007/BF00315467](https://doi.org/10.1007/BF00315467) | [8453956](https://www.ncbi.nlm.nih.gov/pubmed/8453956) | metadata signals extractable PD data (concentration-effect) |
| `Wade_1995.pdf` | Wade JR et al., Felodipine population dose-response and…, Clinical pharmacology and t… (1995) | pd | 5 | [10.1016/0009-9236(95)90042-X](https://doi.org/10.1016/0009-9236(95)90042-X) | [7768080](https://www.ncbi.nlm.nih.gov/pubmed/7768080) | metadata signals extractable PD data (Emax) |
| `Walsky_2005.pdf` | Walsky RL et al., Examination of 209 drugs for inhibition…, Journal of clinical pharmac… (2005) | pd | 5 | [10.1177/0091270004270642](https://doi.org/10.1177/0091270004270642) | [15601807](https://www.ncbi.nlm.nih.gov/pubmed/15601807) | metadata signals extractable PD data (IC50) |
| `Movsesian_1984.pdf` | Movsesian MA et al., Inhibition of turkey gizzard myosin lig…, European journal of pharmac… (1984) | pd | 4 | [10.1016/0014-2999(84)90204-8](https://doi.org/10.1016/0014-2999(84)90204-8) | [6207034](https://www.ncbi.nlm.nih.gov/pubmed/6207034) | metadata signals extractable PD data (IC50) |
| `Sarsero_1998.pdf` | Sarsero D et al., Human vascular to cardiac tissue select…, British journal of pharmaco… (1998) | pd | 4 | [10.1038/sj.bjp.0702045](https://doi.org/10.1038/sj.bjp.0702045) | [9776350](https://www.ncbi.nlm.nih.gov/pubmed/9776350) | metadata signals extractable PD data (IC50) |
| `van_2001.pdf` | van der Lee R et al., Comparison of the time courses and pote…, Blood pressure (2001) | pd | 4 | [10.1080/08037050152669738](https://doi.org/10.1080/08037050152669738) | [11800060](https://www.ncbi.nlm.nih.gov/pubmed/11800060) | metadata signals extractable PD data (IC50) |
| `Guo_2007.pdf` | Guo LQ et al., Different roles of pummelo furanocoumar…, Current drug metabolism (2007) | pgx | 8 | [10.2174/138920007781368917](https://doi.org/10.2174/138920007781368917) | [17691921](https://www.ncbi.nlm.nih.gov/pubmed/17691921) | metadata signals extractable PGX data (CYP3A5*3, PK/PD-context) |
| `Nagaya_2025.pdf` | Nagaya Y et al., In vitro-in vivo scaling of cytochrome…, Drug metabolism and disposi… (2025) | pgx | 8 | [10.1016/j.dmd.2025.100065](https://doi.org/10.1016/j.dmd.2025.100065) | [40199158](https://www.ncbi.nlm.nih.gov/pubmed/40199158) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Xiang_2017.pdf` | Xiang Q et al., The influence of CYP3A5*3 and BCRPC421A…, Journal of clinical pharmac… (2017) | pgx | 8 | [10.1111/jcpt.12505](https://doi.org/10.1111/jcpt.12505) | [28244604](https://www.ncbi.nlm.nih.gov/pubmed/28244604) | metadata signals extractable PGX data (CYP3A5*3, PK/PD-context) |
| `Ye_2024.pdf` | Ye F et al., Gene Polymorphisms and Drug-Drug Intera…, The Journal of pharmacology… (2024) | pgx | 8 | [10.1124/jpet.123.001767](https://doi.org/10.1124/jpet.123.001767) | [37863485](https://www.ncbi.nlm.nih.gov/pubmed/37863485) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Yuan_2020.pdf` | Yuan ZQ et al., Impact of 14 types of genetic polymorph…, International journal of cl… (2020) | pgx | 8 | [10.5414/CP203686](https://doi.org/10.5414/CP203686) | [32301702](https://www.ncbi.nlm.nih.gov/pubmed/32301702) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Bailey_2000.pdf` | Bailey DG et al., Grapefruit-felodipine interaction: effe…, Clinical pharmacology and t… (2000) | pgx | 7 | [10.1067/mcp.2000.110774](https://doi.org/10.1067/mcp.2000.110774) | [11103749](https://www.ncbi.nlm.nih.gov/pubmed/11103749) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Bailey_2004.pdf` | Bailey DG et al., Interactions between grapefruit juice a…, American journal of cardiov… (2004) | pgx | 7 | [10.2165/00129784-200404050-00002](https://doi.org/10.2165/00129784-200404050-00002) | [15449971](https://www.ncbi.nlm.nih.gov/pubmed/15449971) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Chen_2025.pdf` | Chen X et al., Inhibitory effects of nimodipine, nitre…, Biochemical pharmacology (2025) | pgx | 7 | [10.1016/j.bcp.2025.116854](https://doi.org/10.1016/j.bcp.2025.116854) | [40054784](https://www.ncbi.nlm.nih.gov/pubmed/40054784) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Dresser_2017.pdf` | Dresser GK et al., Coffee inhibition of CYP3A4 in vitro wa…, Pharmacology research & per… (2017) | pgx | 7 | [10.1002/prp2.346](https://doi.org/10.1002/prp2.346) | [28971609](https://www.ncbi.nlm.nih.gov/pubmed/28971609) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Fasinu_2017.pdf` | Fasinu P et al., Enhancement of the Oral Bioavailability…, AAPS PharmSciTech (2017) | pgx | 7 | [10.1208/s12249-016-0545-8](https://doi.org/10.1208/s12249-016-0545-8) | [27173987](https://www.ncbi.nlm.nih.gov/pubmed/27173987) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Fujita_2004.pdf` | Fujita K, Food-drug interactions via human cytoch…, Drug metabolism and drug in… (2004) | pgx | 7 | [10.1515/dmdi.2004.20.4.195](https://doi.org/10.1515/dmdi.2004.20.4.195) | [15663291](https://www.ncbi.nlm.nih.gov/pubmed/15663291) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Gomo_2011.pdf` | Gomo C et al., Pharmacokinetic interaction involving s…, Investigational new drugs (2011) | pgx | 7 | [10.1007/s10637-010-9514-3](https://doi.org/10.1007/s10637-010-9514-3) | [20706860](https://www.ncbi.nlm.nih.gov/pubmed/20706860) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Hisaka_2009.pdf` | Hisaka A et al., A proposal for a pharmacokinetic intera…, Clinical pharmacokinetics (2009) | pgx | 7 | [10.2165/11317220-000000000-00000](https://doi.org/10.2165/11317220-000000000-00000) | [19743887](https://www.ncbi.nlm.nih.gov/pubmed/19743887) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Jalava_1997.pdf` | Jalava KM et al., Itraconazole greatly increases plasma c…, Clinical pharmacology and t… (1997) | pgx | 7 | [10.1016/S0009-9236(97)90191-0](https://doi.org/10.1016/S0009-9236(97)90191-0) | [9129558](https://www.ncbi.nlm.nih.gov/pubmed/9129558) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kakar_2004.pdf` | Kakar SM et al., 6'7'-Dihydroxybergamottin contributes t…, Clinical pharmacology and t… (2004) | pgx | 7 | [10.1016/j.clpt.2004.02.007](https://doi.org/10.1016/j.clpt.2004.02.007) | [15179411](https://www.ncbi.nlm.nih.gov/pubmed/15179411) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Klotz_2002.pdf` | Klotz U, Interaction potential of lercanidipine,…, Arzneimittel-Forschung (2002) | pgx | 7 | [10.1055/s-0031-1299873](https://doi.org/10.1055/s-0031-1299873) | [11963641](https://www.ncbi.nlm.nih.gov/pubmed/11963641) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Lee_2022.pdf` | Lee SG et al., Inhibitory effect of 20(S)-protopanaxad…, Biomedicine & pharmacothera… (2022) | pgx | 7 | [10.1016/j.biopha.2022.113514](https://doi.org/10.1016/j.biopha.2022.113514) | [36076601](https://www.ncbi.nlm.nih.gov/pubmed/36076601) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Malhotra_2001.pdf` | Malhotra S et al., Seville orange juice-felodipine interac…, Clinical pharmacology and t… (2001) | pgx | 7 | [10.1067/mcp.2001.113185](https://doi.org/10.1067/mcp.2001.113185) | [11180034](https://www.ncbi.nlm.nih.gov/pubmed/11180034) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ohno_2007.pdf` | Ohno Y et al., General framework for the quantitative…, Clinical pharmacokinetics (2007) | pgx | 7 | [10.2165/00003088-200746080-00005](https://doi.org/10.2165/00003088-200746080-00005) | [17655375](https://www.ncbi.nlm.nih.gov/pubmed/17655375) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Paine_2006.pdf` | Paine MF et al., A furanocoumarin-free grapefruit juice…, The American journal of cli… (2006) | pgx | 7 | [10.1093/ajcn/83.5.1097](https://doi.org/10.1093/ajcn/83.5.1097) | [16685052](https://www.ncbi.nlm.nih.gov/pubmed/16685052) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Pea_2001.pdf` | Pea F et al., Pharmacokinetic aspects of treating inf…, Clinical pharmacokinetics (2001) | pgx | 7 | [10.2165/00003088-200140110-00004](https://doi.org/10.2165/00003088-200140110-00004) | [11735605](https://www.ncbi.nlm.nih.gov/pubmed/11735605) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Sahi_2003.pdf` | Sahi J et al., Avasimibe induces CYP3A4 and multiple d…, The Journal of pharmacology… (2003) | pgx | 7 | [10.1124/jpet.103.050526](https://doi.org/10.1124/jpet.103.050526) | [12766253](https://www.ncbi.nlm.nih.gov/pubmed/12766253) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Salem_2023.pdf` | Salem F et al., Physiologically based pharmacokinetic m…, CPT: pharmacometrics & syst… (2023) | pgx | 7 | [10.1002/psp4.12954](https://doi.org/10.1002/psp4.12954) | [36855819](https://www.ncbi.nlm.nih.gov/pubmed/36855819) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Snyder_2014.pdf` | Snyder BD et al., Evaluation of felodipine as a potential…, European journal of clinica… (2014) | pgx | 7 | [10.1007/s00228-014-1716-8](https://doi.org/10.1007/s00228-014-1716-8) | [25028073](https://www.ncbi.nlm.nih.gov/pubmed/25028073) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Sridhar_2014.pdf` | Sridhar V et al., Evaluation of first-pass cytochrome P45…, Phytotherapy research : PTR (2014) | pgx | 7 | [10.1002/ptr.5040](https://doi.org/10.1002/ptr.5040) | [23881850](https://www.ncbi.nlm.nih.gov/pubmed/23881850) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Takanaga_2000.pdf` | Takanaga H et al., Pharmacokinetic analysis of felodipine-…, British journal of clinical… (2000) | pgx | 7 | [10.1046/j.1365-2125.2000.00140.x](https://doi.org/10.1046/j.1365-2125.2000.00140.x) | [10606837](https://www.ncbi.nlm.nih.gov/pubmed/10606837) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Walsky_2004.pdf` | Walsky RL et al., Validated assays for human cytochrome P…, Drug metabolism and disposi… (2004) | pgx | 7 | [10.1124/dmd.32.6.647](https://doi.org/10.1124/dmd.32.6.647) | [15155557](https://www.ncbi.nlm.nih.gov/pubmed/15155557) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `von_1995.pdf` | von Rosensteil NA et al., Macrolide antibacterials. Drug interact…, Drug safety (1995) | pgx | 7 | [10.2165/00002018-199513020-00005](https://doi.org/10.2165/00002018-199513020-00005) | [7576262](https://www.ncbi.nlm.nih.gov/pubmed/7576262) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-29T05:48:12.620952+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abbas_2000 | not_relevant | 0 | 0 | The paper focuses on the in vitro metabolism of cilostazol and only mentions felodipine as a CYP3A probe substrate for correlation analysis, without reporting pharmacogenomic effects on felodipine's PK/PD parameters. |
| PD | Albengres_1998 | not_relevant | 0 | 0 | The text is a review of drug interactions involving antifungals and mentions felodipine only as a victim drug in a pharmacokinetic interaction, without reporting any pharmacodynamic or exposure-response data. |
| PD | Alker_1991 | not_relevant | 3 | 2 | The paper reports in vitro IC50 and in vivo ED50 for a new compound (2) and compares PK parameters to felodipine, but does not provide a concentration-effect or dose-response curve or specific PD parameters for felodipine itself. |
| popPK | Askholt_1986 | relevant | 4 | 8 | The study reports quantitative PK parameters (half-life, Vd) for felodipine, but it is an in-vitro isolated organ study rather than a standard systemic population PK study. |
| PGx | Bailey_1998 | not_relevant | 2 | 0 | The paper discusses grapefruit juice-drug interactions and mentions individual variability in CYP3A4 expression, but it does not report specific pharmacogenomic effects of gene variants on felodipine PK parameters. |
| PGx | Bailey_2000 | not_relevant | 0 | 0 | The paper investigates a food-drug interaction (grapefruit) and CYP3A4 inhibition, not a pharmacogenomic effect based on genetic variants. |
| PGx | Bailey_2004 | not_relevant | 0 | 0 | The paper discusses drug-food interactions (grapefruit juice) and general CYP3A4/P-gp mechanisms, but does not report specific pharmacogenomic effects of gene variants on felodipine PK/PD. |
| PD | Bainbridge_1993 | not_relevant | 3 | 2 | The study compares PK and PD indices (variability, trough levels) between two drugs but does not report a concentration-effect model or numeric PD parameters (e.g., Emax, EC50) for felodipine. |
| PGx | Barham_1994 | not_relevant | 0 | 0 | The paper evaluates CYP2D1 activity in rats using metoprolol as a probe; felodipine is only mentioned as a probe for other CYP isoforms showing no difference between strains, and no pharmacogenomic effect on felodipine PK/PD is reported. |
| PGx | Benet_2003 | not_relevant | 0 | 0 | The paper investigates transporter-enzyme interactions (P-gp/CYP3A4) and drug-drug interactions, not pharmacogenomic effects of gene variants on felodipine PK/PD. |
| PGx | Benet_2004 | not_relevant | 0 | 0 | The paper investigates transporter-enzyme interactions using inhibitors and cell models, not the effect of genetic variants on felodipine pharmacokinetics. |
| popPK | Blychert_1992 | irrelevant | 0 | 0 | no_text gate: only 74 chars of text extracted (&lt; 400) |
| popPK | Blychert_1992_2 | relevant | 8 | 2 | The study reports qualitative PK trends (e.g., increased half-life with age) but lacks specific numeric parameter values in the provided abstract. |
| PD | Chaturvedi_2014 | not_relevant | 1 | 0 | The paper is a systematic review that explicitly concludes there is no consistent dose-response relationship for felodipine and does not provide numeric PD parameters or concentration-effect curves. |
| PD | Chaturvedi_2014_2 | not_relevant | 1 | 0 | The paper is a systematic review that reports mean blood pressure changes for felodipine compared to placebo but explicitly states that no consistent dose-response relationship was observed, providing no numeric PD parameters (Emax, EC50, etc.) or concentration-effect curves. |
| PGx | Chen_2018 | not_relevant | 0 | 0 | The paper is a review of food-drug interactions and mentions felodipine only in the context of juice bioavailability, without reporting specific pharmacogenomic effects or quantitative PK/PD data for gene variants. |
| PGx | Chen_2025 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (felodipine inhibiting tamoxifen metabolism) and does not report any pharmacogenomic effects (gene variants) on felodipine's PK or PD parameters. |
| PGx | Chimienti_1994 | not_relevant | 0 | 0 | The paper reports clinical efficacy and plasma concentrations in a general patient population but does not investigate the impact of any gene variant or genotype on pharmacokinetic or pharmacodynamic parameters. |
| PD | Diepens_2004 | not_relevant | 0 | 0 | The paper uses felodipine only as a negative control to demonstrate that transcellular calcium transport is not mediated by voltage-operated calcium channels; no dose-response or exposure-response relationship for felodipine is reported. |
| PGx | Dresser_2017 | not_relevant | 0 | 0 | The study investigates a food-drug interaction (coffee vs. grapefruit) and does not report any pharmacogenomic effects (gene variants) on felodipine PK parameters. |
| popPK | Edgar_1987 | relevant | 10 | 0 | The paper describes a PK study of felodipine with a two-compartment model, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Ericsson_1999 | irrelevant | 0 | 0 | no_text gate: only 160 chars of text extracted (&lt; 400) |
| PD | Ericsson_1999 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of clevidipine, not felodipine, and does not report PD parameters for the target drug. |
| PGx | Fasinu_2013 | not_relevant | 0 | 0 | The paper investigates chemical CYP3A4 inhibitors (flavonoids/polymers) and does not report any pharmacogenomic effects (gene variants) on felodipine PK/PD. |
| PGx | Fasinu_2017 | not_relevant | 0 | 0 | The paper investigates the effect of a chemical inhibitor (8-arm-PEG) on CYP3A4-mediated metabolism, not the effect of a genetic variant or genotype on pharmacokinetics. |
| PGx | Fraser_2015 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (clarithromycin vs. azithromycin) and fracture risk, not a pharmacogenomic effect of a gene variant on felodipine PK/PD. |
| PGx | Fuhr_1998 | not_relevant | 0 | 0 | The paper discusses a drug-food interaction (grapefruit juice) affecting CYP3A4, not a pharmacogenomic effect based on a specific gene variant or genotype. |
| popPK | Fuhr_2022 | relevant | 10 | 0 | The paper describes a PBPK model for felodipine, but the specific numeric parameter values are not present in the provided evidence text. |
| PGx | Fuhr_2022 | not_relevant | 0 | 0 | The paper describes a PBPK/PD model for drug-drug interactions (CYP3A4 inhibitors) but does not report pharmacogenomic effects (gene variants) on felodipine PK/PD. |
| PGx | Fujita_2004 | not_relevant | 0 | 0 | The paper is a review of food-drug interactions involving CYP3A4 and does not report pharmacogenomic effects (gene variants) on felodipine PK/PD. |
| PGx | Galetin_2002 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (quinidine/haloperidol) on CYP3A4 activity in vitro, not the effect of a genetic variant on felodipine pharmacokinetics or pharmacodynamics. |
| PGx | Galetin_2003 | not_relevant | 0 | 0 | The paper reports in vitro CYP3A4 substrate interaction kinetics, not pharmacogenomic effects on PK/PD parameters. |
| PGx | Gandhi_2013 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (clarithromycin vs azithromycin) and clinical outcomes (AKI, mortality), but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PD | Gelal_2005 | not_relevant | 2 | 1 | The study reports only qualitative cardiovascular measurements (BP/HR) and concludes no significant difference, without providing numeric PD parameters or concentration-effect curves. |
| PGx | Gomo_2011 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (sorafenib and felodipine) mediated by CYP3A4 inhibition, not a pharmacogenomic effect (gene variant/genotype) on felodipine's PK/PD. |
| PD | Grind_1993 | not_relevant | 0 | 0 | The study reports no significant change in warfarin pharmacokinetics or dose requirement (PD) with felodipine, providing no numeric PD parameters or exposure-response relationship. |
| popPK | Guo_2007 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| PGx | Halliday_1995 | not_relevant | 0 | 0 | The paper investigates the metabolism of halofantrine, not felodipine, and only uses felodipine as a marker substrate for CYP3A4 activity. |
| PGx | Harris_2003 | not_relevant | 0 | 0 | The paper discusses dietary effects (food-drug interactions) on drug metabolism, not pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Henriot_2025 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling of CYP3A4 expression and intestinal permeability for felodipine, but does not report pharmacogenomic effects (gene variants) on PK parameters. |
| PGx | Hisaka_2009 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (DDIs) involving CYP3A4 inhibitors, not pharmacogenomic effects of gene variants on felodipine pharmacokinetics. |
| PD | Ide_1994 | not_relevant | 0 | 0 | The provided text is metadata for the GROBID software and does not contain any scientific content regarding felodipine or pharmacodynamics. |
| PGx | Jalava_1997 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (CYP3A4 inhibition by itraconazole) rather than a pharmacogenomic effect based on a specific gene variant or genotype. |
| PGx | Jing_2016 | not_relevant | 0 | 0 | The paper reports formulation effects on bioavailability, not pharmacogenomic effects. |
| PGx | Kakar_2004 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (grapefruit juice/felodipine) and does not report any pharmacogenomic effects based on gene variants or genotypes. |
| popPK | Kim_2014 | irrelevant | 2 | 1 | The paper focuses on in silico simulation methodology and reports only summary PK metrics (tmax, Cmax, AUC) rather than quantitative disposition parameters like clearance, volume, or rate constants. |
| PGx | Klotz_2002 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (CYP3A4/P-gp) for felodipine but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| popPK | Larsson_1990 | irrelevant | 0 | 0 | no_text gate: only 134 chars of text extracted (&lt; 400) |
| PD | Larsson_1990 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| PGx | Lee_2022 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (inhibition by 20(S)-protopanaxadiol) rather than pharmacogenomic effects (gene variants) on felodipine PK/PD. |
| PGx | Lown_1997 | not_relevant | 0 | 0 | The study investigates the effect of grapefruit juice (an environmental factor) on CYP3A4 expression and felodipine pharmacokinetics, not the effect of a genetic variant or genotype. |
| PD | Lundahl_1995 | not_relevant | 2 | 1 | The study reports qualitative changes in hemodynamics (BP, HR) and PK parameters (Cmax, AUC) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect relationship. |
| PGx | Malhotra_2001 | not_relevant | 0 | 0 | The paper investigates a food-drug interaction (juice) and CYP3A4 inhibition, but does not report any pharmacogenomic effects based on gene variants or genotypes. |
| PGx | Mathur_2013 | not_relevant | 0 | 0 | The paper investigates the metabolism of BI 11634 by CYP3A4 and does not report pharmacogenomic effects on the PK or PD of felodipine. |
| popPK | Mills_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of felodipine binding to calmodulin, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Mills_1985_2 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of metal ion effects on calmodulin binding, not a pharmacokinetic study, and reports no disposition parameters for felodipine. |
| PD | Mills_1985_2 | not_relevant | 0 | 0 | The paper describes in vitro binding affinity and allosteric modulation of calmodulin by metal ions, not a pharmacodynamic exposure-response or dose-response relationship for the drug felodipine in a biological system. |
| popPK | Minarovic_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of felodipine's fluorescence properties and receptor binding, not a pharmacokinetic study reporting disposition parameters. |
| PD | Minarovic_1998 | not_relevant | 3 | 2 | The paper reports binding affinity (Kd) and Hill coefficients for felodipine binding to receptors, which are pharmacological binding parameters, but does not report a pharmacodynamic exposure-response or dose-response relationship for a physiological effect (e.g., blood pressure, heart rate) with numeric PD parameters like Emax or EC50. |
| PGx | Mitsui_2014 | not_relevant | 0 | 0 | The study evaluates a transgenic mouse model for predicting human clearance and does not report pharmacogenomic effects of human gene variants on felodipine PK/PD. |
| PD | Movsesian_1984 | not_relevant | 0 | 0 | The paper studies BAY K 8644, not felodipine. |
| popPK | Mujumdar_2000 | irrelevant | 0 | 0 | The study is a mechanistic investigation of homocysteine-induced calcium signaling in vascular smooth muscle cells, where felodipine is used only as a calcium channel blocker inhibitor, not as the subject of pharmacokinetic analysis. |
| PD | Mujumdar_2000 | not_relevant | 0 | 0 | The paper reports an EC50 for homocysteine, not felodipine; felodipine is only mentioned qualitatively as an inhibitor that abolished the signal. |
| PGx | Nagaya_2025 | not_relevant | 0 | 0 | The paper uses felodipine as a probe substrate to validate a pharmacokinetic prediction method (RAF) but does not report any pharmacogenomic effects (gene variants) on felodipine's PK or PD parameters. |
| PGx | Ohno_2007 | not_relevant | 0 | 0 | The paper focuses on predicting CYP3A4-mediated drug-drug interactions using standard inhibitors, not on pharmacogenomic effects of gene variants on felodipine PK/PD. |
| PGx | Paine_2006 | not_relevant | 0 | 0 | The study investigates a food-drug interaction (grapefruit juice) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Palmero_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial calcium transport where felodipine is used only as a pharmacological probe, not a PK study. |
| PGx | Pea_2001 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions in the ICU and mentions felodipine only as a drug at risk of interaction, without reporting any pharmacogenomic effects or specific PK/PD data for felodipine. |
| PD | Prisant_1992 | not_relevant | 1 | 0 | The text is a general review of drug delivery systems for hypertension and mentions felodipine only in the context of formulation types, without providing any pharmacodynamic data, exposure-response analysis, or numeric parameters. |
| PD | Põder_2003 | not_relevant | 2 | 1 | The study reports qualitative pharmacodynamic interactions and mean effect differences (e.g., QS2i change) but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (Emax, EC50) for felodipine. |
| PD | Rameis_1993 | not_relevant | 2 | 0 | The text is a general review of calcium antagonists that qualitatively mentions plasma-concentration-response relationships exist but provides no specific numeric PD parameters or data for felodipine. |
| PGx | Reddy_2021 | not_relevant | 0 | 0 | The paper investigates felodipine as a PXR agonist and its binding properties, but does not report how genetic variants affect the pharmacokinetics or pharmacodynamics of felodipine. |
| popPK | Riggs_1997 | irrelevant | 2 | 0 | The paper is a review summarizing population PK approaches using felodipine as an example, but it does not provide original quantitative parameter values in the evidence. |
| popPK | Sahi_2003 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PD | Sahi_2003 | not_relevant | 0 | 0 | The paper focuses on the molecular mechanism of Avasimibe (PXR activation) and does not report pharmacodynamic or exposure-response data for felodipine. |
| PGx | Sahi_2003 | not_relevant | 0 | 0 | The paper focuses on the mechanism of avasimibe inducing CYP3A4 and MDR1 via PXR, and does not report pharmacogenomic effects on felodipine PK/PD parameters. |
| PGx | Salem_2023 | not_relevant | 0 | 0 | The paper models the impact of celiac disease (a physiological/pathological condition) on felodipine PK, not the impact of a specific gene variant or genotype. |
| PD | Sarsero_1998 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship for felodipine. |
| PGx | Schnack_2001 | not_relevant | 0 | 0 | The paper discusses antihypertensive treatments in diabetes and mentions the ACE gene polymorphism, but it does not report any pharmacogenomic effect on the PK or PD parameters of felodipine. |
| popPK | Sibille_2026 | irrelevant | 0 | 0 | The study focuses on the antiviral mechanism of calcium channel blockers against HCMV, with felodipine serving only as a weak binder comparator in molecular dynamics simulations, and no pharmacokinetic parameters are reported. |
| PGx | Snyder_2014 | not_relevant | 0 | 0 | The study evaluates felodipine as a perpetrator of drug-drug interactions in a small cohort without reporting any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| popPK | Soons_1993 | irrelevant | 0 | 0 | no_text gate: only 151 chars of text extracted (&lt; 400) |
| PGx | Sridhar_2014 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (hesperetin) in rats, not pharmacogenomic effects of gene variants on felodipine PK/PD. |
| popPK | Tabrizchi_1994 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of calcium channels in rat hindquarters, not a pharmacokinetic study, and reports no disposition parameters for felodipine. |
| popPK | Tabrizchi_1995 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of calcium channel antagonists on vascular contractions and does not report any pharmacokinetic parameters for felodipine. |
| PD | Tabrizchi_1995 | not_relevant | 4 | 2 | The paper reports qualitative changes in EC50 and maximum response for felodipine in an ex vivo tissue model, but does not provide the specific numeric values for these parameters in the text. |
| PGx | Takanaga_2000 | not_relevant | 0 | 0 | The paper models the pharmacokinetic interaction between felodipine and grapefruit juice (dietary factor), not a pharmacogenomic effect based on gene variants or genotypes. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions affecting theophylline clearance, not pharmacogenomic effects on felodipine. |
| PGx | Venkatakrishnan_2000 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions involving antifungal agents and does not report pharmacogenomic effects (gene variants) on felodipine PK/PD. |
| popPK | Wade_1995 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| PGx | Walsky_2004 | not_relevant | 0 | 0 | The paper describes the validation of in vitro assays for CYP450 activities, including felodipine dehydrogenase, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PD | Walsky_2005 | not_relevant | 0 | 0 | The paper focuses on in vitro CYP2C8 inhibition by 209 drugs and does not report pharmacodynamic or exposure-response data for felodipine. |
| popPK | Wanstall_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of felodipine's effect on pulmonary artery relaxation, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Xia_2012 | not_relevant | 0 | 0 | The study investigates the inhibitory effects of felodipine on CYP3A4 activity in vitro, not how a gene variant affects the PK/PD of felodipine. |
| PGx | Yan_2012 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (felodipine affecting indapamide PK) and does not report any pharmacogenomic effects (gene variants) on felodipine. |
| PGx | Ye_2024 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of blonanserin, not felodipine; felodipine is only mentioned as an inhibitor of blonanserin metabolism. |
| popPK | Zhao_2016 | relevant | 8 | 0 | The study reports pharmacokinetic parameters for felodipine in beagles, but the specific numeric values are not present in the provided evidence text. |
| PGx | von_1995 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving macrolides and mentions felodipine only as a rare interaction partner, without reporting any pharmacogenomic effects or specific PK/PD parameter changes. |
| PGx | Štěpánková_2016 | not_relevant | 0 | 0 | The paper investigates the effect of felodipine enantiomers on CYP450 expression and activity in vitro, not the effect of a human gene variant on felodipine pharmacokinetics or pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-29 05:48 UTC</sub>

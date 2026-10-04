<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;miconazole&quot;}]"></div>

# miconazole

- **generic name:** miconazole
- **ATC codes:** `A01AB09`, `A07AC01`, `D01AC02`, `G01AF04`, `J02AB01`, `S02AA13`
- **DrugBank:** [DB01110](https://go.drugbank.com/drugs/DB01110) · **PubChem:** [CID 4189](https://pubchem.ncbi.nlm.nih.gov/compound/4189)
- **molar mass:** 416.129 g/mol (C18H14Cl4N2O) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

**Description.** Miconazole is a broad-spectrum azole antifungal with some activity against Gram-positive bacteria as well.[A203636] It is widely used to treat mucosal yeast infections, including both oral and vaginal infections; although intravenous miconazole is no longer available, a wide variety of suppositories, creams, gels, and tablet-based products are available.[L14021, L14024, L14027, L14033, L14396] Miconazole is thought to act primarily through the inhibition of fungal CYP450 14α-lanosterol demethylase activity.[A203636, A203639]

Miconazole was first synthesized in 1969 and first granted FDA approval on January 8, 1974, for sale by INSIGHT Pharmaceuticals as a topical cream.[A214523, L14021] It is currently available as a variety of prescription and over the counter products. Despite having been in clinical use for an extended period, resistance to miconazole among susceptible organisms is relatively low.[A203636]

**Indication.** Miconazole is indicated for the local treatment of oropharyngeal candidiasis in adult patients and for the adjunctive treatment of diaper dermatitis complicated by candidiasis in immunocompetent patients aged four weeks and older.[L14021, L14024] Miconazole is available as both a suppository and cream for the treatment of vaginal yeast infections and the relief of associated vulvar itching and irritation.[L14027] Lastly, miconazole cream is effective in treating athlete's foot (tinea pedis), jock itch (tinea cruris), ringworm infections (tinea corporis),[L14033] pityriasis (formerly tinea) versicolor,[A203633] and cutaneous candidiasis.[A203630]

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| miconazole | parent | 416.129 | C18H14Cl4N2O | DrugBank | [4189](https://pubchem.ncbi.nlm.nih.gov/compound/4189) | Mikamo_1997 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 02:10 | 12:58 | 0/1/0 | 2/0/0 | 0/0/0 | 202,829/16,407 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 2/3 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Mikamo_1997_reference](drugs/drug_miconazole/Miconazole_Mikamo1997_reference.md) | — | 1-compartment (no model) | 3 | Mikamo H et al., Pharmacokinetics of miconazole in serum…, International journal of an… (1997) | [10.1016/s0924-8579(97)00050-2](https://doi.org/10.1016/s0924-8579(97)00050-2) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Chen_2024_C_parvum](drugs/drug_miconazole/pd_Chen_2024_C_parvum.md) | C. parvum growth ← miconazole · direct sigmoid Emax (Hill) effect | — | Chen H et al., Lower micromolar activity of the antifu…, International journal for p… (2024) | [10.1016/j.ijpddr.2024.100551](https://doi.org/10.1016/j.ijpddr.2024.100551) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Chen_2024_CpAdhE](drugs/drug_miconazole/pd_Chen_2024_CpAdhE.md) | CpAdhE enzyme activity (forward reaction) ← miconazole · direct sigmoid Emax (Hill) effect | — | Chen H et al., Lower micromolar activity of the antifu…, International journal for p… (2024) | [10.1016/j.ijpddr.2024.100551](https://doi.org/10.1016/j.ijpddr.2024.100551) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Chen_2024_CpAdhE_2](drugs/drug_miconazole/pd_Chen_2024_CpAdhE_2.md) | CpAdhE enzyme activity (reverse reaction) ← miconazole · direct sigmoid Emax (Hill) effect | — | Chen H et al., Lower micromolar activity of the antifu…, International journal for p… (2024) | [10.1016/j.ijpddr.2024.100551](https://doi.org/10.1016/j.ijpddr.2024.100551) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Chen_2024_HCT_8](drugs/drug_miconazole/pd_Chen_2024_HCT_8.md) | HCT-8 cell viability ← miconazole · direct sigmoid Emax (Hill) effect | — | Chen H et al., Lower micromolar activity of the antifu…, International journal for p… (2024) | [10.1016/j.ijpddr.2024.100551](https://doi.org/10.1016/j.ijpddr.2024.100551) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Kikuchi_2005_HERG](drugs/drug_miconazole/pd_Kikuchi_2005_HERG.md) | HERG peak tail current ← miconazole · direct sigmoid Emax (Hill) effect | — | Kikuchi K et al., Blockade of HERG cardiac K+ current by…, British journal of pharmaco… (2005) | [10.1038/sj.bjp.0706095](https://doi.org/10.1038/sj.bjp.0706095) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=miconazole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | skin | <sub>“…Topical miconazole is absorbed poorly into the systemic circulation…”</sub> | prose |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2A6` inhibitor, `CYP2B6` inhibitor, `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>“…and feces…”</sub> | prose |
| excretion | kidney | <sub>“…excreted through both urine…”</sub> | prose |
| — | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| — | adrenal gland | `CYP11B1` inhibitor | DrugBank actor |
| — | ovary | `CYP19A1` inhibitor | DrugBank actor |
| — | testis | `CYP19A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CACNA1C (inhibitor), CYP51A1 (inhibitor), KCND1 (inhibitor), KCNJ12 (inhibitor), KCNMA1 (inhibitor), NOS2 (inhibitor), NOS3 (inhibitor), NR1I2 (partial agonist).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 118 matched, 55 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mikamo_1997.pdf` | Mikamo H et al., Pharmacokinetics of miconazole in serum…, International journal of an… (1997) | popPK | 9 | [10.1016/s0924-8579(97)00050-2](https://doi.org/10.1016/s0924-8579(97)00050-2) | [9552718](https://pubmed.ncbi.nlm.nih.gov/9552718) | The study reports quantitative pharmacokinetic parameters (Cmax, t1/2, AUC) for miconazole in human serum and exudate, derived from a two-compartment model. |
| `Kikuchi_2005.pdf` | Kikuchi K et al., Blockade of HERG cardiac K+ current by…, British journal of pharmaco… (2005) | pd | 5 | [10.1038/sj.bjp.0706095](https://doi.org/10.1038/sj.bjp.0706095) | [15778703](https://www.ncbi.nlm.nih.gov/pubmed/15778703) | metadata signals extractable PD data (IC50) |
| `Campbell_1996.pdf` | Campbell WB et al., Identification of epoxyeicosatrienoic a…, Circulation research (1996) | pd | 4 | [10.1161/01.res.78.3.415](https://doi.org/10.1161/01.res.78.3.415) | [8593700](https://www.ncbi.nlm.nih.gov/pubmed/8593700) | metadata signals extractable PD data (EC50) |
| `Evans_2003.pdf` | Evans DC et al., Eletriptan metabolism by human hepatic…, Drug metabolism and disposi… (2003) | pgx | 7 | [10.1124/dmd.31.7.861](https://doi.org/10.1124/dmd.31.7.861) | [12814962](https://www.ncbi.nlm.nih.gov/pubmed/12814962) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Li_2021.pdf` | Li W et al., Risk prediction of drug-drug interactio…, Chemico-biological interact… (2021) | pgx | 7 | [10.1016/j.cbi.2021.109498](https://doi.org/10.1016/j.cbi.2021.109498) | [33961833](https://www.ncbi.nlm.nih.gov/pubmed/33961833) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Miyazaki_2000.pdf` | Miyazaki M et al., Bioavailability assessment of disopyram…, Biological & pharmaceutical… (2000) | pgx | 7 | [10.1248/bpb.23.1363](https://doi.org/10.1248/bpb.23.1363) | [11085367](https://www.ncbi.nlm.nih.gov/pubmed/11085367) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Moody_2015.pdf` | Moody DE et al., Azole antifungal inhibition of buprenor…, Journal of analytical toxic… (2015) | pgx | 7 | [10.1093/jat/bkv030](https://doi.org/10.1093/jat/bkv030) | [25868557](https://www.ncbi.nlm.nih.gov/pubmed/25868557) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Niwa_2014.pdf` | Niwa T et al., Drug interactions between nine antifung…, Current drug metabolism (2014) | pgx | 7 | [10.2174/1389200215666141125121511](https://doi.org/10.2174/1389200215666141125121511) | [25429674](https://www.ncbi.nlm.nih.gov/pubmed/25429674) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Takanohashi_2007.pdf` | Takanohashi T et al., Prediction of the metabolic interaction…, Drug metabolism and pharmac… (2007) | pgx | 7 | [10.2133/dmpk.22.409](https://doi.org/10.2133/dmpk.22.409) | [18159128](https://www.ncbi.nlm.nih.gov/pubmed/18159128) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |

<sub>queue written 2026-10-04T02:03:03.819025+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ambrosio_2018 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (miconazole inhibiting morphine metabolism) rather than pharmacogenomic effects (gene variants) on miconazole's PK/PD. |
| popPK | Awumey_2008 | irrelevant | 0 | 0 | The study investigates the role of miconazole as a pharmacological inhibitor of cytochrome P-450 in rat mesenteric arteries, not its pharmacokinetic parameters. |
| PGx | Ball_1992 | not_relevant | 0 | 0 | The paper characterizes the metabolism of the ergot alkaloid CQA 206-291, not miconazole; miconazole is only mentioned as an inhibitor of CQA metabolism. |
| PGx | Bohets_2000 | not_relevant | 0 | 0 | The paper investigates the metabolism of cisapride and drug-drug interactions, not the pharmacogenomics of miconazole. |
| popPK | Campbell_1996 | irrelevant | 0 | 0 | The study is a mechanistic investigation of endothelium-derived hyperpolarizing factors in bovine coronary arteries, using miconazole only as a cytochrome P450 inhibitor, with no pharmacokinetic parameters reported. |
| popPK | Chang_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of miconazole's effect on intracellular calcium and cell proliferation, reporting no pharmacokinetic parameters. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic and efficacy investigation of miconazole against a parasite enzyme, reporting IC50 and EC50 values rather than pharmacokinetic disposition parameters. |
| PGx | Evans_2003 | not_relevant | 0 | 0 | The paper focuses on the metabolism and transport of eletriptan; miconazole is only mentioned as a CYP3A4 inhibitor used in vitro, and no pharmacogenomic effects on miconazole's PK/PD are reported. |
| PGx | Fowler_2000 | not_relevant | 0 | 0 | The paper studies the effect of a CYP3A4 mutation on the inhibition of the enzyme by miconazole (Ki), not the pharmacokinetic or pharmacodynamic parameters of miconazole itself. |
| PGx | Goda_2006 | not_relevant | 0 | 0 | The paper investigates the metabolism of flutamide, not miconazole, and does not report pharmacogenomic effects on miconazole PK/PD. |
| PGx | Grace_1999 | not_relevant | 0 | 0 | The paper studies the metabolism of artelinic acid and mentions miconazole only as an inhibitor of that process, not as the drug of interest for a pharmacogenomic effect. |
| popPK | Harper_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium influx in HL-60 cells, not a pharmacokinetic study of miconazole. |
| popPK | Kikuchi_2005 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of miconazole's effect on HERG channels, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Lake_1998 | not_relevant | 0 | 0 | The study investigates the effect of miconazole as an enzyme inducer on rat liver CYP isoforms and DNA synthesis, not the effect of a gene variant on miconazole's PK or PD. |
| PGx | Lee_2012 | not_relevant | 0 | 0 | The paper investigates the metabolism of piperaquine, not miconazole, and does not report pharmacogenomic effects on miconazole's PK or PD parameters. |
| PGx | Levy_1995 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving miconazole as an inhibitor of CYP2C9 affecting phenytoin, but does not report pharmacogenomic effects on miconazole's own PK/PD parameters. |
| PGx | Li_2021 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (DDI) between phenytoin and miconazole, not the effect of a gene variant on miconazole's PK/PD. |
| popPK | Mapfunde_2016 | irrelevant | 0 | 0 | The study is an in-vitro toxicity and antifungal activity assessment of plant extracts, using miconazole only as a positive control, with no pharmacokinetic parameters reported. |
| popPK | Miyazaki_2000 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of disopyramide, with miconazole serving only as a co-administered CYP3A4 inhibitor to assess drug interactions, not as the subject drug. |
| PD | Miyazaki_2000 | not_relevant | 0 | 0 | The provided text is metadata for the GROBID software and does not contain any scientific content regarding miconazole or pharmacodynamics. |
| PGx | Miyazaki_2000 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (miconazole inhibiting disopyramide metabolism) in rats, not a pharmacogenomic effect of a gene variant on miconazole's PK/PD. |
| PGx | Moody_2015 | not_relevant | 0 | 0 | The paper reports in vitro CYP inhibition of opioids by miconazole, not a pharmacogenomic effect on miconazole's PK/PD. |
| PGx | Neunzig_2011 | not_relevant | 0 | 0 | The paper reports IC50 values for miconazole as an inhibitor of CYP3A7, but does not report how a gene variant changes the PK or PD parameters of miconazole itself. |
| PGx | Niwa_2005 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (CYP inhibition) of antifungals, not pharmacogenomic effects of gene variants on miconazole PK/PD. |
| PGx | Niwa_2014 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (CYP inhibition) of antifungals, not pharmacogenomic effects of gene variants on miconazole PK/PD. |
| PGx | Palermo_2016 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (inhibition of 19-norandrosterone glucuronidation by miconazole) in vitro, not the effect of a gene variant on miconazole's PK or PD. |
| PGx | Polsky-Fisher_2006 | not_relevant | 0 | 0 | The paper investigates the effect of miconazole as a chemical inhibitor on esterase activity in vitro, not the effect of a gene variant on miconazole's pharmacokinetics or pharmacodynamics. |
| PGx | Rizvi_2013 | not_relevant | 0 | 0 | The paper studies angiogenesis in zebrafish and uses miconazole as a tool compound to inhibit epoxide production, not to assess pharmacogenomic effects on its own PK/PD parameters. |
| popPK | Ryu_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the PET radioligand (18)F-FCWAY, with miconazole mentioned only as a prior comparator in rats, not as the subject drug. |
| PGx | Sharma_2009 | not_relevant | 0 | 0 | The paper investigates the interaction between curcumin and fungal drug transporters, not the effect of human genetic variants on miconazole pharmacokinetics or pharmacodynamics. |
| popPK | Sharma_2023 | irrelevant | 1 | 0 | The paper is a medicinal chemistry study on Naegleria fowleri inhibitors where miconazole serves only as a structural scaffold and reference compound, not the subject of a pharmacokinetic parameter extraction. |
| PGx | Shelton_2000 | not_relevant | 0 | 0 | The paper describes a case of hyperventilation associated with quetiapine and mentions miconazole only as a concomitant medication, without reporting any pharmacogenomic effects on miconazole's PK or PD parameters. |
| popPK | Simpson_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of miconazole's effect on adenylyl cyclase activity, not a pharmacokinetic study. |
| PGx | Svecova_2008 | not_relevant | 0 | 0 | The study investigates the effect of miconazole on CYP3A4 gene expression (drug-drug interaction mechanism) but does not report how a human gene variant or genotype alters the PK/PD of miconazole. |
| PGx | Takanohashi_2007 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (miconazole inhibiting nateglinide metabolism) and does not report any pharmacogenomic effects (gene variants) on miconazole's PK or PD parameters. |
| PGx | Tonini_1999 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving miconazole but does not report pharmacogenomic effects (gene variants) on miconazole's PK or PD parameters. |
| popPK | Trösken_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assessment of CYP19 inhibition (IC50 values) and does not report pharmacokinetic disposition parameters for miconazole. |
| PGx | Venkatakrishnan_2000 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (CYP inhibition) of antifungals, not pharmacogenomic effects of gene variants on miconazole PK/PD. |
| PGx | Youdim_2008 | not_relevant | 0 | 0 | The paper describes a method for measuring CYP inhibition by miconazole in vitro and does not report any pharmacogenomic effects on miconazole's PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 02:03 UTC</sub>

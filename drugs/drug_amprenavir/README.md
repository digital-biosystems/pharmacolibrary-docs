<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;amprenavir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amprenavir_Johnson2014_reference&quot;,&quot;label&quot;:&quot;Johnson_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amprenavir/Amprenavir_Johnson2014_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amprenavir_Okusanya2007_mean&quot;,&quot;label&quot;:&quot;Okusanya_2007_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amprenavir/Amprenavir_Okusanya2007_mean.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amprenavir_Okusanya2007_median&quot;,&quot;label&quot;:&quot;Okusanya_2007_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amprenavir/Amprenavir_Okusanya2007_median.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# amprenavir

- **generic name:** amprenavir
- **ATC codes:** `J05AE05`
- **DrugBank:** [DB00701](https://go.drugbank.com/drugs/DB00701) · **PubChem:** [CID 65016](https://pubchem.ncbi.nlm.nih.gov/compound/65016)
- **molar mass:** 505.627 g/mol (C25H35N3O6S) — DrugBank
- **groups:** approved, withdrawn

## About

Amprenavir is a protease inhibitor that was used to treat HIV infection. It has been withdrawn, including from the European Union, and is no longer available.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422198](https://www.wikidata.org/wiki/Q422198) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| amprenavir | parent | 505.627 | C25H35N3O6S | DrugBank | [65016](https://pubchem.ncbi.nlm.nih.gov/compound/65016) | Okusanya_2007 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:15 | 17:58 | 3/2/0 | 1/0/0 | 0/0/0 | 722,232/27,956 | einfracz / qwen3.8-27b | 16 | 2/10 | 16/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Johnson_2014_reference](drugs/drug_amprenavir/Amprenavir_Johnson2014_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Johnson DH et al., Genomewide association study of atazana…, Pharmacogenetics and genomi… (2014) | [10.1097/fpc.0000000000000034](https://doi.org/10.1097/fpc.0000000000000034) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Okusanya_2007_mean](drugs/drug_amprenavir/Amprenavir_Okusanya2007_mean.md) | ▶ model + simulator | 2-compartment, oral | 11 | Okusanya O et al., Compartmental pharmacokinetic analysis…, Antimicrobial agents and ch… (2007) | [10.1128/AAC.00570-06](https://doi.org/10.1128/AAC.00570-06) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Okusanya_2007_median](drugs/drug_amprenavir/Amprenavir_Okusanya2007_median.md) | ▶ model + simulator | 2-compartment, oral | 11 | Okusanya O et al., Compartmental pharmacokinetic analysis…, Antimicrobial agents and ch… (2007) | [10.1128/AAC.00570-06](https://doi.org/10.1128/AAC.00570-06) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Dailly_2008_reference](drugs/drug_amprenavir/Amprenavir_Dailly2008_reference.md) | — | 1-compartment (no model) | 0 | Dailly E et al., Impact of nevirapine or efavirenz co-ad…, Fundamental & clinical phar… (2008) | [10.1111/j.1472-8206.2007.00556.x](https://doi.org/10.1111/j.1472-8206.2007.00556.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sale_2002_reference](drugs/drug_amprenavir/Amprenavir_Sale2002_reference.md) | — | 1-compartment (no model) | 0 | Sale M et al., Pharmacokinetic modeling and simulation…, Antimicrobial agents and ch… (2002) | [10.1128/AAC.46.3.746-754.2002](https://doi.org/10.1128/AAC.46.3.746-754.2002) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Sadler_2002_IC50](drugs/drug_amprenavir/pd_Sadler_2002_IC50.md) | in vitro 50% inhibitory concentration against wild-type clinical HIV isolates ← amprenavir · direct Emax (saturable) effect | — | Sadler BM et al., Clinical pharmacology and pharmacokinet…, The Annals of pharmacothera… (2002) | [10.1345/aph.10423](https://doi.org/10.1345/aph.10423) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=amprenavir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inducer/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` inhibitor, `CYP2C19` inhibitor, `CYP2C9` substrate, `CYP2D6` substrate, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` substrate, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 246 matched, 147 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 5  ·  extracted 3  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barbour_2014.pdf` | Barbour AM et al., Population pharmacokinetic modeling and…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.205](https://doi.org/10.1002/jcph.205) | [25272370](https://pubmed.ncbi.nlm.nih.gov/25272370) | The paper describes a population PK model for amprenavir in humans, but the evidence provided only contains qualitative model details and covariates without the specific numeric parameter values (CL, V, Q, etc.). |
| `Dailly_2008.pdf` | Dailly E et al., Impact of nevirapine or efavirenz co-ad…, Fundamental & clinical phar… (2008) | popPK | 10 | [10.1111/j.1472-8206.2007.00556.x](https://doi.org/10.1111/j.1472-8206.2007.00556.x) | [18251726](https://pubmed.ncbi.nlm.nih.gov/18251726) | The paper reports a population pharmacokinetic study for amprenavir in humans and provides specific numeric values for clearance (CL) and trough concentrations in the abstract. |
| `Pfister_2002.pdf` | Pfister M et al., Effect of coadministration of nelfinavi…, Clinical pharmacology and t… (2002) | popPK | 10 | [10.1067/mcp.2002.126183](https://doi.org/10.1067/mcp.2002.126183) | [12189360](https://pubmed.ncbi.nlm.nih.gov/12189360) | The paper describes a population pharmacokinetic model for amprenavir, but the specific quantitative parameter values (e.g., CL, V, ka) are not provided in the text, only qualitative changes and relative percent changes. |
| `Veronese_2000.pdf` | Veronese L et al., Single-dose pharmacokinetics of amprena…, Antimicrobial agents and ch… (2000) | popPK | 8 | [10.1128/AAC.44.4.821-826.2000](https://doi.org/10.1128/AAC.44.4.821-826.2000) | [10722476](https://pubmed.ncbi.nlm.nih.gov/10722476) | The study reports amprenavir pharmacokinetics in humans with hepatic impairment, but specific quantitative disposition parameters (CL, V, ka) are not listed in the provided abstract, only AUC fold-increases. |

<sub>queue written 2026-10-07T13:10:21.267703+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Acosta_2012 | not_relevant | 0 | 0 | The paper describes a method to estimate target drug concentrations using protein binding correction factors and in vitro susceptibility data, with no mention of pharmacogenomic variants affecting PK/PD. |
| popPK | Amano_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic/efficacy paper regarding a new HIV protease inhibitor (GRL-98065), and amprenavir is only used as a comparator for selecting resistant virus variants; no pharmacokinetic parameters are reported. |
| popPK | Amano_2013 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological evaluation of a novel HIV protease inhibitor (GRL-0519), and amprenavir is used only as a comparator for resistance development; no pharmacokinetic parameters are reported. |
| popPK | Amano_2015 | irrelevant | 0 | 0 | The paper studies the antiviral activity and in vitro properties of GRL-0739, using amprenavir only as a comparator for resistance development without reporting its PK parameters. |
| popPK | Amano_2016 | irrelevant | 0 | 0 | The study evaluates a novel compound GRL-10413 in vitro, with amprenavir mentioned only as a comparator for resistance selection, and no pharmacokinetic parameters are reported. |
| popPK | Amano_2017 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral activity and resistance study of GRL-09510, using amprenavir only as a comparator; no pharmacokinetic parameters (CL, V, ka, etc.) for amprenavir are reported. |
| popPK | Amano_2022 | irrelevant | 0 | 0 | The paper describes the in vitro antiviral activity of novel HIV-1 protease inhibitors, and amprenavir is only used as a comparator for resistance selection, not as the subject of PK analysis. |
| popPK | Aquaro_2004 | irrelevant | 0 | 0 | The study reports in vitro antiviral efficacy (EC50/EC90) in macrophages and lymphocytes, not pharmacokinetic disposition parameters (CL, V, ka, t1/2) for amprenavir. |
| popPK | Barbour_2014 | relevant | 10 | 2 | The paper describes a population PK model for amprenavir in humans, but the evidence provided only contains qualitative model details and covariates without the specific numeric parameter values (CL, V, Q, etc.). |
| PGx | Brophy_2000 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction involving CYP3A4, but does not investigate any gene variant or pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of amprenavir. |
| PGx | Chiou_2014 | not_relevant | 0 | 0 | The paper describes in vitro transporter inhibition leading to a benign clinical side effect (hyperbilirubinemia) and does not report how a gene variant changes the PK or PD of amprenavir itself. |
| popPK | Chirila_2026 | irrelevant | 0 | 0 | The paper describes machine learning models for drug repurposing against HIV-1 enzymes and does not report pharmacokinetic parameters for amprenavir. |
| PGx | Clay_2003 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic drug-drug interaction between ritonavir and buspirone, not a pharmacogenomic effect on amprenavir. |
| popPK | Colombo_2006 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for atazanavir, not amprenavir. |
| popPK | Crawford_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of vicriviroc, not amprenavir. |
| popPK | Crommentuyn_2005 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lopinavir, not amprenovir. |
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | The paper is a review of lopinavir/ritonavir pharmacokinetics and does not report quantitative PK parameters for amprenavir, which is only mentioned regarding drug interactions. |
| PGx | Cvetkovic_2003 | not_relevant | 0 | 0 | The paper reviews lopinavir/ritonavir, not amprenavir, and does not report pharmacogenomic effects on amprenavir PK/PD. |
| popPK | Dandache_2007 | irrelevant | 0 | 0 | The study focuses on the in vitro antiviral activity and cross-resistance profile of PL-100, using amprenavir only as a comparator drug, with no pharmacokinetic data reported. |
| popPK | De_2005 | irrelevant | 0 | 0 | The study focuses on the antiviral activity and mechanism of action of TMC114, with no pharmacokinetic data for amprenavir. |
| PGx | Decker_1998 | not_relevant | 0 | 0 | The paper studies in vitro drug-drug inhibition (CYP3A4 inhibition by other drugs) and does not report pharmacogenomic effects of gene variants on PK/PD parameters for amprenavir. |
| popPK | Dickinson_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of efavirenz, not amprenavir, which is mentioned only as a comparator drug in the introduction. |
| PGx | Ernest_2005 | not_relevant | 0 | 0 | The study investigates mechanism-based inactivation of CYP3A by HIV protease inhibitors using recombinant enzymes and microsomes, but it does not report pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters of amprenavir. |
| PGx | Floerl_2025 | not_relevant | 1 | 2 | The study characterizes transporter species differences and drug inhibition but does not report pharmacogenomic effects on amprenavir PK/PD parameters. |
| PGx | Ford_2008 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between fosamprenavir-ritonavir and rifabutin, with no mention of genetic variants, genotypes, or pharmacogenomic effects. |
| PGx | Fung_2000 | not_relevant | 0 | 0 | The paper is a general review of amprenavir's pharmacology and clinical use, and it does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Furlan_2001 | not_relevant | 0 | 0 | The text discusses drug-drug interactions (DDI) via CYP3A4 and lacks any data on genetic variants or pharmacogenomic effects on amprenavir PK/PD. |
| PGx | Gass_1998 | not_relevant | 0 | 0 | The paper examines in vivo CYP3A4 activity probes (dapsone/cortisol) and does not report any genetic variants or pharmacogenomic effects on the PK/PD of amprenavir. |
| popPK | Gong_2000 | irrelevant | 0 | 0 | The paper is an in-vitro resistance study of BMS-232632 where amprenavir is only a comparator, and no pharmacokinetic parameters are reported. |
| PGx | Granfors_2006 | not_relevant | 0 | 0 | The paper describes in vitro enzyme inhibition constants (Ki) for CYP3A isoforms by various drugs but does not report any pharmacogenomic variant effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Haymer_2026 | irrelevant | 1 | 0 | The study focuses on repurposing amprenavir analogues for CB2 activity, and while in-vivo PK parameters (CL, t1/2, Vss) are reported for the analogues, no quantitative pharmacokinetic parameters for amprenavir itself are provided in the text. |
| popPK | Hennig_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of rifabutin and its drug-drug interaction with HIV protease inhibitors, not on the quantitative PK parameters of amprenavir. |
| PGx | Hesse_2001 | not_relevant | 0 | 0 | The paper reports in vitro CYP2B6 inhibition by various drugs, including amprenavir, but does not report any pharmacogenomic effect (gene variant/genotype) on PK or PD parameters. |
| PGx | Hester_2006 | not_relevant | 0 | 0 | The paper is a general review of fosamprenavir pharmacology and clinical use, reporting no pharmacogenomic studies or genotype-specific PK/PD parameters for amprenavir. |
| popPK | Hsiao_2008 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo mechanistic investigation of P-glycoprotein inhibition, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for amprenavir. |
| PGx | Ishizawa_2001 | not_relevant | 0 | 0 | The text discusses general pharmacology and resistance patterns but does not report how a specific genetic variant or genotype affects a PK/PD parameter of amprenavir. |
| popPK | Jackson_2000 | irrelevant | 0 | 0 | The paper analyzes the pharmacokinetics of nelfinavir, not amprenavir. |
| popPK | Johnson_2014 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for atazanavir, not amprenavir; amprenavir is only mentioned in the discussion as a comparator in previous studies. |
| popPK | Jullien_2006 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lopinavir, not amprenavir. |
| PGx | Justesen_2003 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction between amprenavir and delavirdine in healthy volunteers without reporting any pharmacogenomic variants or genotype-based effects. |
| PGx | Justesen_2004 | not_relevant | 0 | 0 | The study investigates dose-dependent pharmacokinetics in healthy volunteers but contains no data on genetic variants or genotypes. |
| popPK | Kan_2026 | irrelevant | 0 | 0 | The study is an in-vitro and animal antiviral efficacy study of amprenavir against Zika virus, reporting no pharmacokinetic parameters. |
| popPK | Kappelhoff_2005 | irrelevant | 0 | 0 | The study models the pharmacokinetics of ritonavir, not amprenavir, which is the required subject drug. |
| PGx | Karlgren_2012 | not_relevant | 0 | 0 | The paper focuses on OATP1B1 inhibitor screening and DDI prediction, mentioning amprenavir only as a test inhibitor of transport, and does not report any pharmacogenomic (gene variant) effects on amprenavir PK/PD. |
| PGx | Klotz_2002 | not_relevant | 0 | 0 | The paper discusses the drug-drug interaction potential of calcium channel blockers and lists amprenavir as a generic CYP3A4 inhibitor, but does not report any pharmacogenomic effect of a gene variant on the PK/PD of amprenavir. |
| PGx | Koh_2003 | not_relevant | 0 | 0 | The paper reports in vitro activity of a novel drug against viral variants, not the effect of human gene variants on amprenavir pharmacokinetics or pharmacodynamics. |
| popPK | Koh_2009 | irrelevant | 0 | 0 | The paper reports in-vitro antiviral potency (EC50) and structural modeling for a novel drug (GRL-02031), using amprenavir only as a comparator for resistance selection, with no pharmacokinetic parameters reported. |
| popPK | Koh_2010 | irrelevant | 0 | 0 | The study focuses on in vitro HIV-1 resistance mechanisms and does not report pharmacokinetic parameters for amprenavir. |
| popPK | Lacher_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the herbicide paraquat in mice, not amprenavir. |
| PGx | Lalezari_2003 | not_relevant | 0 | 0 | The paper evaluates the efficacy and safety of enfuvirtide in a clinical trial without analyzing gene variants or their impact on the pharmacokinetics or pharmacodynamics of amprenavir. |
| popPK | Ma_2008 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of efavirenz, with amprenavir acting as a co-administered agent/comparator, and no quantitative PK parameters for amprenavir are reported in the evidence. |
| PGx | Ma_2008 | not_relevant | 0 | 0 | The study evaluates pharmacokinetic drug-drug interactions (efavirenz with protease inhibitors) and contains no data on gene variants, genotypes, or pharmacogenomic effects. |
| PGx | Ma_2008_2 | not_relevant | 1 | 2 | The study reports the effect of an enzyme inducer (rifampicin) and a transgenic background on amprenavir PK, but does not report the effect of a human gene variant/genotype/phenotype on the drug's parameters. |
| popPK | McCoy_2021 | irrelevant | 0 | 0 | The paper is a study on machine learning link prediction for drug repurposing in COVID-19 and mentions amprenavir only as a predicted candidate, containing no pharmacokinetic data. |
| PGx | McKeage_2009 | not_relevant | 0 | 0 | The paper is a review of darunavir and does not report pharmacogenomic effects on amprenavir. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (CYP3A4 inhibition) rather than pharmacogenomic effects (genotype-based variations) on PK/PD parameters. |
| popPK | Mikolajewska_2021 | irrelevant | 0 | 0 | The paper is a systematic review regarding colchicine treatment for COVID-19 and contains no information about amprenavir or its pharmacokinetics. |
| PGx | Milazzo_2015 | not_relevant | 0 | 0 | The paper reports pharmacokinetic drug-drug interactions between telaprevir and antiretrovirals, not the effect of a gene variant or genotype on amprenavir pharmacokinetics. |
| PGx | Nies_2012 | not_relevant | 1 | 0 | The paper is a general review of MATE transporters that mentions amprenavir as a substrate but does not report specific gene variant effects on amprenavir PK/PD parameters. |
| PGx | Pal_2006 | not_relevant | 2 | 0 | The paper is a review on drug-herbal interactions (St. John's Wort, CYP3A4/MDR1) and does not report a pharmacogenomic effect (gene variant) on PK/PD parameters for amprenavir. |
| popPK | Percha_2015 | irrelevant | 0 | 0 | The paper describes a text mining algorithm for extracting drug-gene relationships and does not contain any pharmacokinetic data or parameters for amprenavir. |
| popPK | Pfister_2002 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for amprenavir, but the specific quantitative parameter values (e.g., CL, V, ka) are not provided in the text, only qualitative changes and relative percent changes. |
| PGx | Pfister_2002 | not_relevant | 0 | 0 | The paper reports pharmacokinetic changes due to drug-drug interactions, not pharmacogenomic variants. |
| popPK | Pfister_2003 | irrelevant | 0 | 0 | The study models the pharmacokinetics of efavirenz, nelfinavir, and indinavir, but does not report quantitative PK parameters for amprenavir, which is only mentioned as a co-administered drug in the regimen. |
| PGx | Pham_2007 | not_relevant | 0 | 0 | The paper reports on drug-drug interactions (pharmacokinetics of amprenavir/lopinavir with efavirenz/fosamprenavir) and does not investigate any gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Pozniak_2008 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing viral load response to darunavir versus control protease inhibitors (including amprenavir), and does not report pharmacokinetic parameters for amprenavir. |
| popPK | Prague_2013 | irrelevant | 2 | 0 | The paper describes a new statistical software program (NIMROD) and uses Amprenavir data as an illustration, but provides no quantitative PK parameter values. |
| popPK | Preston_2003 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics (PD) and target attainment using population PK data from 13 patients, but no quantitative PK parameters (CL, V, etc.) or numeric PK values are reported in the provided evidence. |
| popPK | Raugi_2016 | irrelevant | 0 | 0 | The study is a structural/phenotypic analysis of HIV protease inhibitors and does not report any pharmacokinetic parameters for amprenavir. |
| popPK | Robinson_2000 | irrelevant | 0 | 0 | The paper is an in vitro antiviral efficacy study of BMS-232632 where amprenavir is only used as a comparator in combination studies, containing no pharmacokinetic data. |
| popPK | Rosenkranz_2007 | irrelevant | 3 | 0 | The study reports pharmacodynamic effects (lipid/glucose changes) rather than quantitative pharmacokinetic disposition parameters (CL, V, half-life) for amprenavir. |
| popPK | Shivarov_2026 | irrelevant | 0 | 0 | The paper is a FAERS pharmacovigilance analysis of ibrutinib and does not report any pharmacokinetic parameters for amprenavir. |
| popPK | Taburet_2004 | irrelevant | 2 | 2 | The study reports relative changes (54% decrease) and protein binding fractions rather than absolute quantitative disposition parameters (CL, V, ka, etc.) for amprenavir, and focuses on drug-drug interaction dynamics rather than a full PK model of the parent drug alone. |
| popPK | Taylor_2001 | irrelevant | 0 | 0 | The paper is a review discussing the distribution of antiretroviral drugs into semen and does not report specific quantitative pharmacokinetic parameters (CL, V, Q, ka) for amprenavir. |
| popPK | Tran_2005 | irrelevant | 1 | 0 | The paper reports in-vitro P-gp transport kinetics (association/dissociation constants) in MDCK cells, not systemic pharmacokinetic disposition parameters (CL, V, half-life) for amprenavir. |
| PGx | Tréluyer_2003 | not_relevant | 1 | 0 | The paper reports on developmental maturation of CYP enzymes, not the effect of a specific gene variant or genotype on pharmacokinetic parameters. |
| popPK | Veronese_2000 | relevant | 8 | 2 | The study reports amprenavir pharmacokinetics in humans with hepatic impairment, but specific quantitative disposition parameters (CL, V, ka) are not listed in the provided abstract, only AUC fold-increases. |
| popPK | Vourvahis_2012 | irrelevant | 0 | 0 | The study focuses on the ECG effects of lersivirine and does not involve amprenavir. |
| PGx | Wagmann_2017 | not_relevant | 0 | 0 | The study characterizes in vitro interactions between amprenavir and the ABCG2 transporter but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Weiss_2007 | not_relevant | 0 | 0 | The paper reports in vitro BCRP inhibition by amprenavir, not a pharmacogenomic effect (gene variant impact) on PK/PD parameters. |
| PGx | Wire_2006 | not_relevant | 2 | 0 | The paper describes general clinical pharmacokinetics and drug-drug interactions (CYP3A4/P-gp) but does not report on the impact of genetic variants or genotypes on PK/PD parameters. |
| popPK | Witvrouw_2004 | irrelevant | 0 | 0 | The study reports in-vitro antiviral susceptibility (EC50) of viruses to amprenavir, not pharmacokinetic parameters (CL, V, etc.). |
| popPK | Yan_2012 | irrelevant | 0 | 0 | This is an in-vitro medicinal chemistry study evaluating enzyme inhibition and antiviral activity of amprenavir derivatives, reporting no pharmacokinetic parameters. |
| PGx | van_2001 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and pharmacokinetics of PI combinations, containing no information on genetic variants affecting pharmacokinetics. |
| PGx | van_2007 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction between paroxetine and fosamprenavir, not a pharmacogenomic effect of a gene variant on amprenavir PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 13:10 UTC</sub>

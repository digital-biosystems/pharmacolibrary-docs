<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;amprenavir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amprenavir_Johnson2014_reference&quot;,&quot;label&quot;:&quot;Johnson_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amprenavir/Amprenavir_Johnson2014_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amprenavir_Okusanya2007_mean&quot;,&quot;label&quot;:&quot;Okusanya_2007_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amprenavir/Amprenavir_Okusanya2007_mean.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amprenavir_Okusanya2007_median&quot;,&quot;label&quot;:&quot;Okusanya_2007_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amprenavir/Amprenavir_Okusanya2007_median.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

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
| amprenavir | parent | 505.627 | C25H35N3O6S | DrugBank | [65016](https://pubchem.ncbi.nlm.nih.gov/compound/65016) | Dailly_2008, Okusanya_2007 |
| fosamprenavir | metabolite | 585.609 | C25H36N3O9PS | PubChem | [131536](https://pubchem.ncbi.nlm.nih.gov/compound/131536) | Dailly_2008 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:17 | 9:32 | 3/1/1 | 0/0/0 | 0/0/0 | 444,122/29,821 | ollama / glm-5.3-flash | 16 | 2/10 | 16/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Johnson_2014_reference](drugs/drug_amprenavir/Amprenavir_Johnson2014_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Johnson DH et al., Genomewide association study of atazana…, Pharmacogenetics and genomi… (2014) | [10.1097/fpc.0000000000000034](https://doi.org/10.1097/fpc.0000000000000034) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Okusanya_2007_mean](drugs/drug_amprenavir/Amprenavir_Okusanya2007_mean.md) | ▶ model + simulator | 2-compartment, oral | 13 | Okusanya O et al., Compartmental pharmacokinetic analysis…, Antimicrobial agents and ch… (2007) | [10.1128/AAC.00570-06](https://doi.org/10.1128/AAC.00570-06) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Okusanya_2007_median](drugs/drug_amprenavir/Amprenavir_Okusanya2007_median.md) | ▶ model + simulator | 2-compartment, oral | 12 | Okusanya O et al., Compartmental pharmacokinetic analysis…, Antimicrobial agents and ch… (2007) | [10.1128/AAC.00570-06](https://doi.org/10.1128/AAC.00570-06) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Dailly_2008_reference](drugs/drug_amprenavir/Amprenavir_Dailly2008_reference.md) | — | 1-compartment (no model) | 3 | Dailly E et al., Impact of nevirapine or efavirenz co-ad…, Fundamental & clinical phar… (2008) | [10.1111/j.1472-8206.2007.00556.x](https://doi.org/10.1111/j.1472-8206.2007.00556.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sale_2002_reference](drugs/drug_amprenavir/Amprenavir_Sale2002_reference.md) | — | parent + metabolite (no model) | 0 | Sale M et al., Pharmacokinetic modeling and simulation…, Antimicrobial agents and ch… (2002) | [10.1128/AAC.46.3.746-754.2002](https://doi.org/10.1128/AAC.46.3.746-754.2002) |

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
- **records:** 5  ·  extracted 3  ·  needs_review 1  ·  rejected 1  ·  stale 5
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Barbour_2014.pdf` | Barbour AM et al., Population pharmacokinetic modeling and…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.205](https://doi.org/10.1002/jcph.205) | [25272370](https://pubmed.ncbi.nlm.nih.gov/25272370) | Population PK model for amprenavir in children, but numeric CL/V/parameter values are not shown in the abstract (likely in tables/supplement not provided). |
| `Dailly_2008.pdf` | Dailly E et al., Impact of nevirapine or efavirenz co-ad…, Fundamental & clinical phar… (2008) | popPK | 9 | [10.1111/j.1472-8206.2007.00556.x](https://doi.org/10.1111/j.1472-8206.2007.00556.x) | [18251726](https://pubmed.ncbi.nlm.nih.gov/18251726) | Population PK study of amprenavir in HIV patients with numeric clearance values reported directly in the abstract. |
| `Pfister_2002.pdf` | Pfister M et al., Effect of coadministration of nelfinavi…, Clinical pharmacology and t… (2002) | popPK | 9 | [10.1067/mcp.2002.126183](https://doi.org/10.1067/mcp.2002.126183) | [12189360](https://pubmed.ncbi.nlm.nih.gov/12189360) | Population PK model of amprenavir in HIV patients, but only relative changes in intrinsic clearance (-41%, -54%, &gt;30%) are given; full CL/V parameter values are not in the evidence. |
| `Taburet_2004.pdf` | Taburet AM et al., Interactions between amprenavir and the…, Clinical pharmacology and t… (2004) | popPK | 6 | [10.1016/j.clpt.2003.12.013](https://doi.org/10.1016/j.clpt.2003.12.013) | [15060509](https://pubmed.ncbi.nlm.nih.gov/15060509) | Human PK interaction study with amprenavir as subject drug, but evidence shows only concentration changes and unbound fractions, not CL/V/ka values, which may be in figures/tables not provided. |
| `Veronese_2000.pdf` | Veronese L et al., Single-dose pharmacokinetics of amprena…, Antimicrobial agents and ch… (2000) | popPK | 6 | [10.1128/AAC.44.4.821-826.2000](https://doi.org/10.1128/AAC.44.4.821-826.2000) | [10722476](https://pubmed.ncbi.nlm.nih.gov/10722476) | Human single-dose PK study of amprenavir, but only AUC fold-changes are given; CL/V/t½ values are not present in the evidence. |
| `Prague_2013.pdf` | Prague M et al., NIMROD: a program for inference via a n…, Computer methods and progra… (2013) | popPK | 5 | [10.1016/j.cmpb.2013.04.014](https://doi.org/10.1016/j.cmpb.2013.04.014) | [23764196](https://pubmed.ncbi.nlm.nih.gov/23764196) | Amprenavir PK data from the PUZZLE trial are used only as an illustration; no numeric parameter values appear in the evidence. |
| `Preston_2003.pdf` | Preston SL et al., In vitro-in vivo model for evaluating t…, Antimicrobial agents and ch… (2003) | popPK | 5 | [10.1128/AAC.47.11.3393-3399.2003](https://doi.org/10.1128/AAC.47.11.3393-3399.2003) | [14576093](https://pubmed.ncbi.nlm.nih.gov/14576093) | Population PK of amprenavir in 13 HIV patients is used, but the evidence contains no numeric CL/V/ka values—those presumably live in figures or supplementary material not provided. |

<sub>queue written 2026-10-07T15:09:29.786502+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Acosta_2012 | not_relevant | 0 | 0 | Paper derives protein binding correction factors and target troughs from in vitro susceptibility; no gene variant/genotype effect on amprenavir PK/PD is reported. |
| popPK | Amano_2007 | irrelevant | 0 | 0 | In-vitro antiviral drug-design study of a different protease inhibitor; amprenavir appears only as a selection agent with no PK parameters. |
| popPK | Amano_2013 | irrelevant | 0 | 0 | In-vitro antiviral potency study of a different drug (GRL-0519); amprenavir only mentioned as comparator, no PK parameters. |
| popPK | Amano_2015 | irrelevant | 0 | 0 | Amprenavir is only a comparator for resistance development; no PK parameters for it are reported. |
| popPK | Amano_2016 | irrelevant | 0 | 0 | Amprenavir is only used to select resistant HIV-1 variants; no PK parameters for amprenavir are reported. |
| popPK | Amano_2017 | irrelevant | 0 | 0 | In-vitro antiviral study of a new protease inhibitor; amprenavir appears only as a comparator with EC50 values, no PK parameters. |
| popPK | Amano_2022 | irrelevant | 0 | 0 | In vitro antiviral/BBB study of new protease inhibitors; amprenavir only used to select resistant variants, no PK parameters reported. |
| popPK | Aquaro_2004 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study (EC50) with no PK disposition parameters for amprenavir. |
| popPK | Barbour_2014 | relevant | 10 | 3 | Population PK model for amprenavir in children, but numeric CL/V/parameter values are not shown in the abstract (likely in tables/supplement not provided). |
| PGx | Brophy_2000 | not_relevant | 0 | 0 | Reports a drug-drug interaction (clarithromycin) on amprenavir PK; no gene variant/genotype/phenotype effect is studied. |
| PGx | Chiou_2014 | not_relevant | 2 | 3 | Paper reports in vitro transporter inhibition by amprenavir, not a gene variant/genotype effect on amprenavir PK/PD parameters. |
| popPK | Chirila_2026 | irrelevant | 0 | 0 | This is a machine-learning/docking drug-repurposing study for HIV-1 enzyme inhibitors with no amprenavir PK parameters (no CL, V, ka, or population-PK model). |
| PGx | Clay_2003 | not_relevant | 0 | 0 | Case report of a ritonavir-buspirone drug-drug interaction; no gene variant/genotype effect on amprenavir PK/PD reported. |
| popPK | Colombo_2006 | irrelevant | 0 | 0 | This is a population PK study of atazanavir, not amprenavir; amprenavir parameters are not reported. |
| popPK | Crawford_2010 | irrelevant | 0 | 0 | The paper models vicriviroc, a different drug; amprenavir is not the subject. |
| popPK | Crommentuyn_2005 | irrelevant | 0 | 0 | This is a population PK study of lopinavir/ritonavir, not amprenavir; amprenavir is not the subject drug. |
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | Review of lopinavir/ritonavir; amprenavir appears only as an interacting co-administered drug with no amprenavir PK parameters reported. |
| PGx | Cvetkovic_2003 | not_relevant | 0 | 0 | Review of lopinavir/ritonavir; no gene variant/genotype effect on amprenavir PK/PD parameters reported. |
| popPK | Dandache_2007 | irrelevant | 0 | 0 | In vitro antiviral activity study; amprenavir is only a comparator with EC50 fold-changes, no PK disposition parameters. |
| popPK | De_2005 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity study of TMC114; amprenavir appears only as a combination/synergy comparator with no PK parameters. |
| PGx | Decker_1998 | not_relevant | 0 | 0 | Study examines drug-drug interactions and CYP3A4-mediated metabolism in vitro, not genetic variants affecting amprenavir PK/PD. |
| popPK | Dickinson_2016 | irrelevant | 0 | 0 | This is a population PK study of efavirenz, not amprenavir; amprenavir is only mentioned as a historical co-administered drug, with no amprenavir parameters reported. |
| PGx | Ernest_2005 | not_relevant | 0 | 0 | In vitro CYP3A inactivation kinetics by amprenavir; no gene variant/genotype effect on PK/PD parameters. |
| PGx | Floerl_2025 | not_relevant | 0 | 0 | Amprenavir is only listed as a tested inhibitor; no gene variant/genotype effect on amprenavir PK/PD is reported. |
| PGx | Ford_2008 | not_relevant | 0 | 0 | This is a drug-drug interaction study (FPV-RTV with rifabutin) with no gene variant/genotype/phenotype effects on amprenavir PK/PD. |
| PGx | Fung_2000 | not_relevant | 0 | 0 | Review of amprenavir PK/PD mentions CYP metabolism but reports no gene variant/genotype effect on any PK or PD parameter. |
| PGx | Furlan_2001 | not_relevant | 0 | 0 | Discusses drug-drug interactions via CYP3A4 inhibition/induction, not gene variants or pharmacogenomic effects on amprenavir PK/PD. |
| PGx | Gass_1998 | not_relevant | 0 | 0 | Study examines drug-drug (protease inhibitor) effects on CYP3A4 probes, not gene variant effects on amprenavir PK/PD. |
| popPK | Gong_2000 | irrelevant | 0 | 0 | In vitro resistance study of BMS-232632; amprenavir appears only as a comparator with fold-change susceptibility values, no PK parameters. |
| PGx | Granfors_2006 | not_relevant | 0 | 5 | In vitro enzyme inhibition study; no gene variant/genotype effect on amprenavir PK/PD parameters reported. |
| popPK | Haymer_2026 | irrelevant | 2 | 1 | This is a medicinal chemistry SAR paper on amprenavir-derived CB2 agonists; amprenavir itself only has in vitro predicted microsomal clearance/efflux (no numeric CL/V/t½ for amprenavir), and the in vivo rat PK values (CLp, Vss, t½) are for analogues, not amprenavir. |
| popPK | Hennig_2016 | irrelevant | 2 | 1 | The subject drug is rifabutin and its metabolite; amprenavir appears only as a co-administered PI affecting rifabutin, and no amprenavir PK parameter values are present. |
| PGx | Hesse_2001 | not_relevant | 0 | 0 | In vitro drug-drug inhibition study; no gene variant/genotype effect on amprenavir PK/PD reported. |
| PGx | Hester_2006 | not_relevant | 0 | 0 | Review abstract mentions CYP3A4 metabolism but reports no gene variant effects on amprenavir PK/PD parameters. |
| popPK | Hsiao_2008 | irrelevant | 1 | 1 | Amprenavir is only a P-gp inhibitor probe in an in vitro assay; no PK disposition parameters for amprenavir are reported. |
| PGx | Ishizawa_2001 | not_relevant | 2 | 2 | Review mentions CYP3A4 metabolism and resistance mutations but reports no gene variant effect on amprenavir PK/PD parameters. |
| popPK | Jackson_2000 | irrelevant | 0 | 0 | This is a population-PK study of nelfinavir, not amprenavir; amprenavir is not the subject drug. |
| popPK | Johnson_2014 | irrelevant | 0 | 0 | The population-PK model and parameters (ka 0.47 h−1, V 86.7 L, CL 7.86 L/h) are for atazanavir, not amprenavir, which is only mentioned once as a comparator drug. |
| popPK | Jullien_2006 | irrelevant | 0 | 0 | The study reports population-PK parameters for lopinavir, not amprenavir; amprenavir is not the subject drug. |
| PGx | Justesen_2003 | not_relevant | 0 | 0 | This is a drug-drug interaction study (amprenavir–delavirdine) with no gene variant, genotype, or pharmacogenomic phenotype reported. |
| PGx | Justesen_2004 | not_relevant | 0 | 0 | Dose-combination PK study with no gene variant/genotype/phenotype effects reported. |
| popPK | Kan_2026 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study of fosamprenavir/darunavir against Zika virus; amprenavir is inactive and no PK parameters are reported. |
| popPK | Kappelhoff_2005 | irrelevant | 0 | 0 | This is a population PK study of ritonavir, not amprenavir; amprenavir is not mentioned at all. |
| PGx | Karlgren_2012 | not_relevant | 2 | 3 | Study examines OATP1B1 inhibition by amprenavir in vitro (DDI prediction), not a gene variant/genotype effect on amprenavir PK/PD. |
| PGx | Klotz_2002 | not_relevant | 0 | 0 | Paper discusses CYP3A4/P-gp drug-drug interactions for calcium channel blockers; amprenavir only mentioned as a CYP3A4 inhibitor, no gene variant effect on amprenavir PK/PD. |
| PGx | Koh_2003 | not_relevant | 0 | 0 | In vitro drug design paper; no gene variant/genotype effects on amprenavir PK/PD parameters reported. |
| popPK | Koh_2009 | irrelevant | 0 | 0 | In-vitro antiviral drug development study of a different protease inhibitor (GRL-02031); amprenavir appears only as a comparator in resistance selection, with no PK parameters. |
| popPK | Koh_2010 | irrelevant | 0 | 0 | In vitro HIV resistance study; amprenavir only appears as a comparator in susceptibility testing, no PK parameters. |
| popPK | Lacher_2014 | irrelevant | 0 | 0 | The study is about paraquat in mice, not amprenavir; no amprenavir parameters are present. |
| PGx | Lalezari_2003 | not_relevant | 0 | 0 | No pharmacogenomic effects on amprenavir PK/PD are reported; genotyping was only used to screen for NNRTI resistance. |
| popPK | Ma_2008 | irrelevant | 2 | 1 | Amprenavir is only a co-administered comparator; the population PK model and numeric parameters (CLt/F, Vss/F) are for efavirenz, not amprenavir. |
| PGx | Ma_2008 | not_relevant | 0 | 0 | Study reports drug-drug interactions (efavirenz with PIs) on amprenavir-related PK, with no gene variant/genotype/phenotype effects. |
| popPK | McCoy_2021 | irrelevant | 0 | 0 | This is a knowledge-graph link prediction study for COVID-19 drug repurposing; amprenavir is only mentioned as a predicted drug candidate, with no PK parameters. |
| PGx | McKeage_2009 | not_relevant | 1 | 0 | Review of darunavir; mentions amprenavir only for in vitro potency/cross-resistance, no gene variant effect on amprenavir PK/PD parameters. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | Paper discusses CYP3A4 drug-drug interactions with cisapride, not gene variants affecting amprenavir PK/PD. |
| popPK | Mikolajewska_2021 | irrelevant | 0 | 0 | A Cochrane review of colchicine for COVID-19 with no amprenavir PK data or parameters. |
| PGx | Milazzo_2015 | not_relevant | 0 | 0 | Reports drug-drug interactions (telaprevir) affecting amprenavir PK, not a gene variant/genotype/phenotype effect. |
| PGx | Nies_2012 | not_relevant | 3 | 1 | Review only mentions amprenavir as a MATE substrate and calls for study of genetic variants; no reported genotype effect on PK/PD parameters. |
| PGx | Pal_2006 | not_relevant | 0 | 0 | Reports herbal (St. John's wort) drug interactions, not gene variant/genotype effects on amprenavir PK/PD. |
| popPK | Percha_2015 | irrelevant | 0 | 0 | This is a text-mining/NLP paper about drug-gene relationship extraction; no amprenavir PK parameters are reported. |
| popPK | Pfister_2002 | relevant | 9 | 4 | Population PK model of amprenavir in HIV patients, but only relative changes in intrinsic clearance (-41%, -54%, &gt;30%) are given; full CL/V parameter values are not in the evidence. |
| PGx | Pfister_2002 | not_relevant | 0 | 0 | Effects are drug-drug interactions (protease inhibitors on CYP3A4), not gene variant/genotype effects on amprenavir PK. |
| popPK | Pfister_2003 | irrelevant | 1 | 0 | Amprenavir is only a co-administered drug in the study; population PK parameters are reported for efavirenz, nelfinavir, and indinavir, not amprenavir, and no numeric amprenavir values appear. |
| PGx | Pham_2007 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (efavirenz, ritonavir) on amprenavir PK, with no gene variant/genotype/phenotype effects. |
| popPK | Pozniak_2008 | irrelevant | 0 | 0 | Amprenavir is only a comparator PI in a darunavir efficacy trial; no PK parameters for amprenavir are reported. |
| popPK | Prague_2013 | irrelevant | 5 | 0 | Amprenavir PK data from the PUZZLE trial are used only as an illustration; no numeric parameter values appear in the evidence. |
| popPK | Preston_2003 | relevant | 5 | 2 | Population PK of amprenavir in 13 HIV patients is used, but the evidence contains no numeric CL/V/ka values—those presumably live in figures or supplementary material not provided. |
| popPK | Raugi_2016 | irrelevant | 0 | 0 | Virology/structural study of HIV-2 protease inhibitor susceptibility; amprenavir is only an inhibitor in EC50 assays, with no PK parameters. |
| popPK | Robinson_2000 | irrelevant | 0 | 0 | Amprenavir appears only as a combination-study comparator in an in-vitro antiviral paper; no PK parameters reported. |
| popPK | Rosenkranz_2007 | irrelevant | 3 | 2 | This is a PK-PD interaction study where amprenavir is co-administered with other drugs and drug levels are used as predictors of metabolic effects, but no quantitative disposition parameters (CL, V, ka, half-life, or population-PK model) for amprenavir are reported in the evidence. |
| popPK | Shivarov_2026 | irrelevant | 0 | 0 | FAERS pharmacovigilance study of ibrutinib co-exposures; no amprenavir PK parameters reported. |
| popPK | Taburet_2004 | relevant | 6 | 3 | Human PK interaction study with amprenavir as subject drug, but evidence shows only concentration changes and unbound fractions, not CL/V/ka values, which may be in figures/tables not provided. |
| popPK | Taylor_2001 | irrelevant | 1 | 0 | A narrative review of antiretroviral distribution into semen with no numeric PK parameters for amprenavir reported. |
| popPK | Tran_2005 | irrelevant | 2 | 2 | In-vitro P-gp transport kinetics in MDCKII cells, not population-PK disposition parameters for amprenavir; numeric values not present in the evidence. |
| PGx | Tréluyer_2003 | not_relevant | 3 | 3 | Developmental CYP3A maturation affects amprenavir metabolism, but no gene variant/genotype effect on a PK/PD parameter is reported. |
| popPK | Veronese_2000 | relevant | 6 | 3 | Human single-dose PK study of amprenavir, but only AUC fold-changes are given; CL/V/t½ values are not present in the evidence. |
| popPK | Vourvahis_2012 | irrelevant | 0 | 0 | This is a QTc study of lersivirine; amprenavir is not the subject drug and no amprenavir PK parameters appear. |
| PGx | Wagmann_2017 | not_relevant | 2 | 3 | In vitro hBCRP ATPase assay with amprenavir; no gene variant/genotype effect on amprenavir PK/PD parameters reported. |
| PGx | Weiss_2007 | not_relevant | 0 | 0 | In vitro BCRP inhibition by amprenavir; no gene variant/genotype effect on PK/PD parameters. |
| PGx | Wire_2006 | not_relevant | 0 | 0 | Review of fosamprenavir PK and drug interactions; no gene variant/genotype effects on amprenavir PK/PD reported. |
| popPK | Witvrouw_2004 | irrelevant | 0 | 0 | In-vitro antiviral susceptibility study (EC50 fold changes), no pharmacokinetic parameters for amprenavir. |
| popPK | Yan_2012 | irrelevant | 0 | 0 | Medicinal chemistry study of amprenavir derivatives with in vitro enzyme/antiviral assays; no PK parameters reported. |
| PGx | van_2001 | not_relevant | 0 | 0 | Review of PI combinations via CYP3A4/P-gp drug-drug interactions; no gene variant/genotype effect on amprenavir PK/PD reported. |
| PGx | van_2007 | not_relevant | 0 | 0 | This is a drug-drug interaction study (fosamprenavir-ritonavir and paroxetine) with no gene variant, genotype, or pharmacogenomic phenotype reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:09 UTC</sub>

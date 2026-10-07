<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;delavirdine&quot;}]"></div>

# delavirdine

- **generic name:** delavirdine
- **ATC codes:** `J05AG02`
- **DrugBank:** [DB00705](https://go.drugbank.com/drugs/DB00705) · **PubChem:** [CID 5625](https://pubchem.ncbi.nlm.nih.gov/compound/5625)
- **molar mass:** 456.561 g/mol (C22H28N6O3S) — DrugBank
- **groups:** approved, withdrawn

## About

It is no longer available, as it has been withdrawn from the market.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q370244](https://www.wikidata.org/wiki/Q370244) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| delavirdine | parent | 456.561 | C22H28N6O3S | DrugBank | [5625](https://pubchem.ncbi.nlm.nih.gov/compound/5625) | Smith_2005 |
| N-delavirdine | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:08 | 12:45 | 0/1/0 | 2/0/0 | 0/0/0 | 539,937/40,933 | ollama / glm-5.3-flash | 12 | 3/6 | 11/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Smith_2005_reference](drugs/drug_delavirdine/Delavirdine_Smith2005_reference.md) | — | nonlinear / manual (no model) | 5 | Smith PF et al., Population pharmacokinetics of delavird…, Clinical pharmacokinetics (2005) | [10.2165/00003088-200544010-00004](https://doi.org/10.2165/00003088-200544010-00004) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Cheng_1997_ERMBT](drugs/drug_delavirdine/pd_Cheng_1997_ERMBT.md) | Erythromycin breath test (hepatic CYP3A activity) ← delavirdine · direct Emax (saturable) effect | — | Cheng CL et al., Steady-state pharmacokinetics of delavi…, Clinical pharmacology and t… (1997) | [10.1016/S0009-9236(97)90133-8](https://doi.org/10.1016/S0009-9236(97)90133-8) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">in vitro</span> | [Weiss_2007_BCRP_inhibition](drugs/drug_delavirdine/pd_Weiss_2007_BCRP_inhibition.md) | BCRP inhibition (pheophorbide A accumulation in MDCKII-BCRP cells) ← delavirdine · direct Emax (saturable) effect | — | Weiss J et al., Modulation of human BCRP (ABCG2) activi…, The Journal of antimicrobia… (2007) | [10.1093/jac/dkl474](https://doi.org/10.1093/jac/dkl474) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=delavirdine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor, `CYP3A7` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | mammary gland | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 127 matched, 103 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Smith_2005.pdf` | Smith PF et al., Population pharmacokinetics of delavird…, Clinical pharmacokinetics (2005) | popPK | 10 | [10.2165/00003088-200544010-00004](https://doi.org/10.2165/00003088-200544010-00004) | [15634033](https://pubmed.ncbi.nlm.nih.gov/15634033) | Population PK model of delavirdine (and its metabolite N-delavirdine) in HIV patients with full numeric parameter estimates (Vss 67.6 L, intrinsic CL 19.8 L/h, etc.) present in the abstract. |

<sub>queue written 2026-10-07T15:56:20.184435+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Baker_2006 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype is examined; QT effects relate to drug combinations and CYP3A4 inhibition, not pharmacogenomics. |
| popPK | Chen_2012 | irrelevant | 0 | 0 | Medicinal chemistry/SAR study; delavirdine only appears as a comparator with no PK parameters. |
| popPK | Chen_2013 | irrelevant | 0 | 0 | Medicinal chemistry paper on new NNRTI analogues; delavirdine is only a reference drug in antiviral assays, with no PK parameters. |
| popPK | Chen_2016 | irrelevant | 0 | 0 | Medicinal chemistry SAR study; delavirdine is only an activity comparator, no PK parameters reported. |
| PGx | Davey_1996 | not_relevant | 3 | 2 | Viral genotype/phenotype correlates with antiviral response, not a pharmacokinetic or pharmacodynamic parameter of delavirdine itself. |
| PGx | Fichtenbaum_2002 | not_relevant | 0 | 0 | Paper discusses drug-drug interactions (CYP inhibition/induction) with delavirdine, not gene variant effects on its PK/PD. |
| PGx | Genin_1996 | not_relevant | 0 | 0 | Medicinal chemistry SAR study of metabolic stability of analogs; no gene variant/genotype effect on delavirdine PK/PD reported. |
| PGx | Gill_2001 | not_relevant | 0 | 0 | Paper concerns saquinavir safety; delavirdine mentioned only as a CYP3A4 inhibitor affecting saquinavir levels, with no pharmacogenomic effect on delavirdine PK/PD. |
| popPK | Grasela_2005 | irrelevant | 0 | 0 | A commentary on model-based drug development with no delavirdine PK data or parameters. |
| popPK | Hecht_2015 | irrelevant | 0 | 0 | In-vitro cytotoxicity study of NNRTIs; delavirdine only has an EC50 (171 μmol/l), no PK disposition parameters. |
| PGx | Hesse_2001 | not_relevant | 0 | 0 | Delavirdine is only mentioned as a weak inhibitor of CYP2B6; no gene variant/genotype effect on its PK/PD is reported. |
| popPK | Huang_2009 | irrelevant | 0 | 0 | The study reports PK of BILR 355, a different drug; delavirdine is not the subject. |
| popPK | Huang_2015 | irrelevant | 0 | 0 | Delavirdine appears only as an EC50 comparator in an antiviral assay; no PK parameters reported. |
| PGx | Joly_2000 | not_relevant | 0 | 0 | Review text discusses NNRTI metabolism and resistance mutations but reports no gene variant effect on delavirdine PK/PD parameters. |
| PGx | Justesen_2003 | not_relevant | 0 | 0 | Reports a drug-drug interaction (amprenavir) on delavirdine PK, with no gene variant/genotype/phenotype effects. |
| PGx | Justesen_2004 | not_relevant | 0 | 0 | Dose-dependent PK of delavirdine with amprenavir; no gene variant/genotype/phenotype effects reported. |
| PGx | Levin_2010 | not_relevant | 0 | 0 | Delavirdine only mentioned as a CYP3A4 inhibitor; no gene variant effect on its PK/PD reported. |
| popPK | Li_2013 | irrelevant | 0 | 0 | Medicinal chemistry/SAR paper; delavirdine is only an activity comparator, no PK parameters reported. |
| popPK | Li_2016 | irrelevant | 0 | 0 | Medicinal chemistry paper on novel NNRTI synthesis; delavirdine appears only as an EC50 comparator, no PK parameters. |
| PGx | Li_2021 | not_relevant | 0 | 0 | Delavirdine is a CYP3A4 inhibitor in a DDI study, not a gene variant/genotype/phenotype effect. |
| PGx | Liedtke_2009 | not_relevant | 0 | 0 | Delavirdine-warfarin interaction is only anticipated; no pharmacogenomic effect on PK/PD parameters reported. |
| popPK | Liu_2014 | irrelevant | 0 | 0 | Medicinal chemistry/antiviral potency study; delavirdine only an EC50 comparator, no PK parameters. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | Delavirdine is only used as a reverse transcriptase inhibitor in a mechanistic experiment; no PK parameters for it are reported. |
| PGx | Ma_2005 | not_relevant | 2 | 0 | Abstract of a review on drug-drug interactions with NNRTIs; no gene variant/genotype effects on delavirdine PK/PD reported. |
| PGx | Mannu_2011 | not_relevant | 2 | 3 | Computational docking of CYP3A4 binding; no gene variant/genotype effect on delavirdine PK/PD parameters reported. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | Delavirdine is mentioned only as a CYP3A4 inhibitor drug interaction with cisapride; no gene variant/genotype effect on delavirdine PK/PD is reported. |
| popPK | Ming_2023 | irrelevant | 0 | 0 | This is a medicinal chemistry design/synthesis and antiviral activity study with no pharmacokinetic parameters for delavirdine. |
| popPK | Pinna_2001 | irrelevant | 0 | 0 | This is a medicinal chemistry paper synthesizing delavirdine analogues with anti-HIV cell assays; no PK parameters for delavirdine are reported (only a cited t1/2 of 5.8 h from literature). |
| PGx | Poppe_1997 | not_relevant | 0 | 0 | Paper concerns PNU-140690 antiviral activity; delavirdine only mentioned as combination partner, no pharmacogenomic PK/PD effects. |
| popPK | Ribone_2012 | irrelevant | 0 | 0 | This is a medicinal chemistry/SAR study; delavirdine appears only as an activity comparator (EC50), with no PK parameters. |
| PGx | Romero_1996 | not_relevant | 0 | 0 | Paper describes medicinal chemistry of BHAP analogs against resistant HIV-1 RT; no gene variant effects on delavirdine PK/PD parameters reported. |
| popPK | Schmith_2019 | irrelevant | 0 | 0 | This is a buprenorphine concentration-QT study; delavirdine is only mentioned as a co-administered CYP inhibitor, with no PK parameters for delavirdine. |
| popPK | Schotland_2018 | irrelevant | 0 | 0 | This is a pharmacovigilance/adverse-event prediction study with no delavirdine PK parameters; delavirdine is not even mentioned. |
| PGx | Sharma_2013 | not_relevant | 0 | 0 | In vitro PXR activation study with no gene variant/genotype effects on delavirdine PK/PD parameters. |
| PGx | Sharma_2015 | not_relevant | 1 | 1 | In vitro CAR receptor activation study; no gene variant effect on delavirdine PK/PD parameters reported. |
| popPK | Taylor_2001 | irrelevant | 1 | 0 | A review of antiretroviral distribution into semen with no numeric PK parameters for delavirdine. |
| popPK | Tian_2014 | irrelevant | 0 | 0 | This is a medicinal chemistry/antiviral potency study; delavirdine is only a reference comparator and no PK parameters are reported. |
| PGx | Tran_2001 | not_relevant | 0 | 0 | Review of delavirdine PK and drug interactions; no gene variant/genotype/phenotype effects on PK/PD reported. |
| popPK | Vanangamudi_2023 | irrelevant | 2 | 2 | This is a review of NNRTI design; delavirdine is only mentioned as an approved drug with a half-life (1.17 h) cited from literature, not a PK study of delavirdine itself. |
| PGx | Voorman_1998 | not_relevant | 2 | 3 | In vitro enzyme kinetics of delavirdine metabolism and CYP3A inactivation; no gene variant/genotype effect on PK/PD parameters reported. |
| PGx | Voorman_1998_2 | not_relevant | 3 | 5 | In vitro enzyme characterization (CYP3A/2D6 correlation and kinetics in microsomes), not a gene variant/genotype effect on in vivo PK/PD parameters. |
| PGx | Voorman_2001 | not_relevant | 2 | 5 | In vitro enzyme inhibition Ki values for delavirdine on CYPs, not a gene variant/genotype effect on delavirdine PK/PD. |
| popPK | Wan_2015 | irrelevant | 0 | 0 | Medicinal chemistry paper on novel NNRTI hybrids; delavirdine appears only as an in-vitro potency comparator (EC50), with no PK/disposition parameters. |
| popPK | Wang_2014 | irrelevant | 0 | 0 | Delavirdine appears only as an EC50 comparator in an anti-HIV potency study; no PK parameters are reported. |
| PGx | Weiss_2007 | not_relevant | 0 | 0 | In vitro BCRP inhibition by delavirdine; no gene variant/genotype effect on PK/PD parameters reported. |
| popPK | Witvrouw_2004 | irrelevant | 0 | 0 | In-vitro antiviral susceptibility study (EC50 fold changes), no pharmacokinetic parameters for delavirdine. |
| popPK | Yang_2013 | irrelevant | 0 | 0 | Medicinal chemistry paper on DAPY derivatives; delavirdine is only a potency comparator, no PK parameters reported. |
| popPK | Yang_2016 | irrelevant | 0 | 0 | Medicinal chemistry/antiviral potency study; delavirdine is only a reference comparator, no PK parameters reported. |
| popPK | Zhan_2009 | irrelevant | 0 | 0 | Medicinal chemistry/SAR study with only EC50 potency data; delavirdine is just a reference comparator, no PK parameters. |
| popPK | Zhang_2011 | irrelevant | 0 | 0 | Delavirdine appears only as a potency comparator (EC50) in an in-vitro drug-discovery study; no PK parameters are reported. |
| PGx | Zhou_2004 | not_relevant | 2 | 1 | Delavirdine is only mentioned as a CYP3A4 mechanism-based inhibitor; no gene variant effect on its PK/PD parameters is reported. |
| PGx | Zhou_2005 | not_relevant | 0 | 0 | Delavirdine only mentioned as a CYP3A4 mechanism-based inhibitor; no gene variant/genotype effect on PK/PD parameters reported. |
| PGx | Zhou_2007 | not_relevant | 0 | 0 | Review of CYP3A4 mechanism-based inhibition; no gene variant/genotype effect on delavirdine PK/PD parameters reported. |
| PGx | Zhou_2008 | not_relevant | 0 | 0 | Delavirdine is only mentioned as a CYP3A4 inhibitor; no gene variant/genotype effect on its PK/PD parameters is reported. |
| PGx | von_2001 | not_relevant | 0 | 0 | In vitro CYP inhibition by delavirdine; no gene variant/genotype effect on PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:56 UTC</sub>

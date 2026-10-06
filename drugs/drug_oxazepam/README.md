<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;oxazepam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxazepam_Imbert2016_reference&quot;,&quot;label&quot;:&quot;Imbert_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_oxazepam/Oxazepam_Imbert2016_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# oxazepam

- **generic name:** oxazepam
- **ATC codes:** `N05BA04`
- **DrugBank:** [DB00842](https://go.drugbank.com/drugs/DB00842) · **PubChem:** [CID 4616](https://pubchem.ncbi.nlm.nih.gov/compound/4616)
- **molar mass:** 286.713 g/mol (C15H11ClN2O2) — DrugBank
- **groups:** approved

## About

Oxazepam is a benzodiazepine used to treat anxiety disorders and focal epilepsy, and also acts as a sedative and hypnotic. It is an approved medicine and remains in use, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412299](https://www.wikidata.org/wiki/Q412299) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| oxazepam | parent | 286.713 | C15H11ClN2O2 | DrugBank | [4616](https://pubchem.ncbi.nlm.nih.gov/compound/4616) | Dingemanse_1990, Imbert_2016 |
| N-desmethyldiazepam | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:59 | 12:23 | 1/3/0 | 4/1/1 | 0/0/0 | 245,313/14,421 | ollama / glm-5.3-flash | 9 | 5/3 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Imbert_2016_reference](drugs/drug_oxazepam/Oxazepam_Imbert2016_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Imbert B et al., Population Pharmacokinetics of High-Dos…, Therapeutic drug monitoring (2016) | [10.1097/FTD.0000000000000262](https://doi.org/10.1097/FTD.0000000000000262) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Dingemanse_1988_reference](drugs/drug_oxazepam/Oxazepam_Dingemanse1988_reference.md) | — | 1-compartment (no model) | 0 | Dingemanse J et al., Pharmacokinetic modeling of the anticon…, Journal of pharmacokinetics… (1988) | [10.1007/BF01062261](https://doi.org/10.1007/BF01062261) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Dingemanse_1990_reference](drugs/drug_oxazepam/Oxazepam_Dingemanse1990_reference.md) | — | 1-compartment (no model) | 3 | Dingemanse J et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of pharmaco… (1990) | [10.1111/j.1476-5381.1990.tb14653.x](https://doi.org/10.1111/j.1476-5381.1990.tb14653.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wretlind_1977_reference](drugs/drug_oxazepam/Oxazepam_Wretlind1977_reference.md) | — | general linear (no model) | 0 | Wretlind M et al., Disposition of three benzodiazepines af…, Acta pharmacologica et toxi… (1977) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Danhof_1992_EEG_amplitude_12_30_Hz](drugs/drug_oxazepam/pd_Danhof_1992_EEG_amplitude_12_30_Hz.md) | amplitude in the 12-30 Hz frequency band of the EEG ← oxazepam · direct sigmoid Emax (Hill) effect | — | Danhof M et al., Modelling of the pharmacodynamics and p…, International journal of cl… (1992) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Dingemanse_1990_seizure_threshold_anticonvulsant_effect](drugs/drug_oxazepam/pd_Dingemanse_1990_seizure_threshold_anticonvulsant_effect.md) | seizure threshold (anticonvulsant effect) ← oxazepam · direct log-linear effect | — | Dingemanse J et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of pharmaco… (1990) | [10.1111/j.1476-5381.1990.tb14653.x](https://doi.org/10.1111/j.1476-5381.1990.tb14653.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Hoogerkamp_1996_anticonvulsant_effect_direct_cortical_stimulation_model](drugs/drug_oxazepam/pd_Hoogerkamp_1996_anticonvulsant_effect_direct_cortical_stimul.md) | anticonvulsant effect (direct cortical stimulation model) ← oxazepam · direct sigmoid Emax (Hill) effect | — | Hoogerkamp A et al., Pharmacokinetic/pharmacodynamic relatio…, The Journal of pharmacology… (1996) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Mandema_1991_EEG](drugs/drug_oxazepam/pd_Mandema_1991_EEG.md) | EEG amplitude in the 11.5 to 30 Hz frequency range ← oxazepam · direct sigmoid Emax (Hill) effect | — | Mandema JW et al., Pharmacokinetic-pharmacodynamic modelin…, The Journal of pharmacology… (1991) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Dingemanse_1988_PTZ_threshold](drugs/drug_oxazepam/pd_Dingemanse_1988_PTZ_threshold.md) | elevation of the serum or brain threshold concentration of PTZ (anticonvulsant response) ← oxazepam · direct sigmoid Emax (Hill) effect | model (no simulator) | Dingemanse J et al., Pharmacokinetic modeling of the anticon…, Journal of pharmacokinetics… (1988) | [10.1007/BF01062261](https://doi.org/10.1007/BF01062261) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Morino_1986_percent_anticonvulsant_effect_protection_against_pentylenetetrazole_induced_clonic_convulsion](drugs/drug_oxazepam/pd_Morino_1986_percent_anticonvulsant_effect_protection_against.md) | percent anticonvulsant effect (protection against pentylenetetrazole-induced clonic convulsion) ← oxazepam (brain concentration, as active metabolite of camazepam) · direct sigmoid Emax (Hill) effect | — | Morino A et al., Receptor-mediated model relating antico…, Journal of pharmacokinetics… (1986) | [10.1007/BF01106709](https://doi.org/10.1007/BF01106709) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oxazepam) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `UGT1A9` substrate, `UGT2B15` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target), TSPO (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 147 matched, 102 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 1  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Imbert_2016.pdf` | Imbert B et al., Population Pharmacokinetics of High-Dos…, Therapeutic drug monitoring (2016) | popPK | 10 | [10.1097/FTD.0000000000000262](https://doi.org/10.1097/FTD.0000000000000262) | [26580099](https://pubmed.ncbi.nlm.nih.gov/26580099) | Population PK model of oxazepam in humans with CL, V, absorption duration, and half-life values fully reported in the abstract. |
| `Dingemanse_1990.pdf` | Dingemanse J et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of pharmaco… (1990) | popPK | 9 | [10.1111/j.1476-5381.1990.tb14653.x](https://doi.org/10.1111/j.1476-5381.1990.tb14653.x) | [2331575](https://pubmed.ncbi.nlm.nih.gov/2331575) | Rat PK study of oxazepam with a 2-compartment model and numeric CL and V values reported directly in the abstract. |
| `Dingemanse_1988.pdf` | Dingemanse J et al., Pharmacokinetic modeling of the anticon…, Journal of pharmacokinetics… (1988) | popPK | 8 | [10.1007/BF01062261](https://doi.org/10.1007/BF01062261) | [3418496](https://pubmed.ncbi.nlm.nih.gov/3418496) | Rat PK of oxazepam with two-compartment model and half-lives (6 and 52 min) reported in abstract; CL/V values not given but half-lives present. |
| `Wretlind_1977.pdf` | Wretlind M et al., Disposition of three benzodiazepines af…, Acta pharmacologica et toxi… (1977) | popPK | 8 | not captured | [15399](https://pubmed.ncbi.nlm.nih.gov/15399) | Human PK study of oxazepam with two-compartment model and half-lives reported, but full numeric compartmental parameters (CL, V) are not given in the evidence. |
| `Yuan_1993.pdf` | Yuan J, Modeling blood/plasma concentrations in…, Toxicology and applied phar… (1993) | popPK | 7 | [10.1006/taap.1993.1052](https://doi.org/10.1006/taap.1993.1052) | [8470117](https://pubmed.ncbi.nlm.nih.gov/8470117) | Oxazepam disposition kinetics (absorption/elimination half-lives, one-compartment model) are modeled in dosed feed/water studies, but no numeric parameter values for oxazepam appear in the provided evidence. |
| `Yuan_1994.pdf` | Yuan J et al., Toxicokinetics of oxazepam in rats and…, Journal of pharmaceutical s… (1994) | popPK | 7 | [10.1002/jps.2600831002](https://doi.org/10.1002/jps.2600831002) | [7884653](https://pubmed.ncbi.nlm.nih.gov/7884653) | Toxicokinetic study of oxazepam in rats and mice with compartmental modeling, but numeric values (half-lives, bioavailability) are only summarized in the abstract; detailed CL/V parameters likely in tables not provided. |
| `Mandema_1991.pdf` | Mandema JW et al., Pharmacokinetic-pharmacodynamic modelin…, The Journal of pharmacology… (1991) | popPK | 6 | not captured | [1850477](https://pubmed.ncbi.nlm.nih.gov/1850477) | PK-PD modeling of oxazepam in rats with i.v. dosing, but the evidence shows only EC50/Emax values; disposition parameters (CL, V) are not present in the provided text. |
| `Smink_2008.pdf` | Smink BE et al., The concentration of oxazepam and oxaze…, British journal of clinical… (2008) | popPK | 5 | [10.1111/j.1365-2125.2008.03252.x](https://doi.org/10.1111/j.1365-2125.2008.03252.x) | [18662285](https://pubmed.ncbi.nlm.nih.gov/18662285) | Human PK study fitting one-compartment models to oxazepam and its glucuronide, but no numeric disposition parameters (CL, V, t½) appear in the evidence. |

<sub>queue written 2026-10-06T19:56:10.710125+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Acikgöz_2009 | irrelevant | 3 | 2 | In-vitro hepatocyte biotransformation model of diazepam with oxazepam only as a metabolite; no numeric PK parameter values for oxazepam are present in the evidence. |
| PGx | Acikgöz_2009 | not_relevant | 0 | 0 | In vitro hepatocyte study of diazepam metabolism with chemical inducers; no gene variant/genotype effect on oxazepam PK/PD parameters. |
| popPK | Acikgöz_2012 | irrelevant | 1 | 1 | Oxazepam appears only as a metabolite of diazepam in an in vitro hepatocyte biotransformation study; no PK disposition parameters (CL, V, half-life) for oxazepam are reported, and metabolite concentrations are in figures not provided. |
| PGx | Al_2013 | not_relevant | 0 | 0 | Oxazepam is only tested as an inhibitor of ethanol glucuronidation; no gene variant effect on oxazepam PK/PD is reported. |
| PGx | Coffman_1998 | not_relevant | 4 | 3 | In vitro UGT2B7Y/H comparison shows no difference in oxazepam glucuronidation; no PK/PD parameter effect reported. |
| PGx | Court_2005 | not_relevant | 2 | 1 | Mentions S-oxazepam as a UGT2B15 probe substrate but reports no genotype effect on oxazepam PK/PD parameters. |
| popPK | Crevat-Pisano_1987 | irrelevant | 2 | 2 | Oxazepam is only a metabolite measured in a diazepam PK study; no disposition parameters (CL, V, model) are reported for oxazepam itself, only concentrations. |
| popPK | Danhof_1992 | irrelevant | 3 | 1 | PK/PD study of oxazepam but only EC50 pharmacodynamic values discussed; no numeric disposition parameters (CL, V, half-life) appear in the evidence. |
| PGx | Foster_1997 | not_relevant | 2 | 3 | Mentions CYP2D6 polymorphism affects paroxetine (not oxazepam) pharmacokinetics, with no quantitative effect sizes and no oxazepam gene-variant data. |
| PGx | Hansen_2000 | not_relevant | 2 | 3 | Paper studies diazepam metabolism by CYP enzymes in porcine cells; oxazepam is only a metabolite, no gene variant effect on oxazepam PK/PD reported. |
| PGx | Hara_2007 | not_relevant | 0 | 0 | Paper reports drug-drug inhibition of morphine glucuronidation by oxazepam in vitro; no gene variant/genotype effect on oxazepam PK/PD. |
| popPK | Hoogerkamp_1996 | irrelevant | 3 | 2 | This is a rat PK/PD study of anticonvulsant effect reporting EC50/EC250 pharmacodynamic parameters, not disposition parameters (CL, V, half-life) for oxazepam, and no numeric PK values for oxazepam appear in the evidence. |
| popPK | Kirkwood_1998 | irrelevant | 1 | 1 | Oxazepam is only an inhibitor tested in vitro on dihydrocodeine glucuronidation; no oxazepam PK parameters are reported. |
| PGx | Kirkwood_1998 | not_relevant | 0 | 0 | Oxazepam is only an inhibitor of dihydrocodeine glucuronidation in vitro; no gene variant effect on oxazepam PK/PD is reported. |
| PGx | Lahousse_2011 | not_relevant | 1 | 2 | Study examines gene expression/mutations in oxazepam-induced mouse liver tumors (carcinogenesis mechanisms), not pharmacogenomic effects on oxazepam PK/PD parameters. |
| popPK | Liu_1995 | irrelevant | 3 | 4 | Oxazepam is only a metabolite measured by an HPLC assay; the PK parameters reported are for N-demethyldiazepam, not oxazepam itself. |
| PGx | Luk_2014 | not_relevant | 3 | 4 | Reports drug-drug interactions (CYP inhibitors) altering diazepam metabolite fractions, not a gene variant/genotype effect on oxazepam PK/PD. |
| PGx | Luurila_1994 | not_relevant | 0 | 0 | Drug-drug interaction study (erythromycin-temazepam); no gene variant/genotype effect on oxazepam PK/PD reported. |
| popPK | Löscher_1981 | irrelevant | 2 | 4 | Oxazepam appears only as a metabolite of diazepam in dogs (half-life 5.7 hr reported), not as the subject drug of a PK study. |
| popPK | Maksay_1988 | irrelevant | 0 | 0 | In vitro receptor binding study with oxazepam only as a ligand; no PK disposition parameters. |
| popPK | Mandema_1991 | relevant | 6 | 3 | PK-PD modeling of oxazepam in rats with i.v. dosing, but the evidence shows only EC50/Emax values; disposition parameters (CL, V) are not present in the provided text. |
| PGx | Miners_1997 | not_relevant | 0 | 0 | Oxazepam is only an inhibitor of DMXAA glucuronidation; no gene variant effect on oxazepam PK/PD is reported. |
| popPK | Morino_1985 | irrelevant | 0 | 0 | The evidence contains only a GROBID parsing header with no paper content, so no PK parameters for oxazepam are present. |
| popPK | Morino_1986 | irrelevant | 1 | 1 | Oxazepam is only a metabolite/comparator in a camazepam receptor-binding PK/PD study in rats, with no oxazepam disposition parameters reported. |
| PGx | Nishihara_2013 | not_relevant | 0 | 0 | The pharmacogenomic effect (UGT2B15*2 on Km) concerns sipoglitazar, not oxazepam, which is used only as a probe substrate. |
| PGx | Oechsler_2010 | not_relevant | 0 | 0 | Oxazepam is only an inhibitor of buprenorphine glucuronidation in vitro; no gene variant effect on oxazepam PK/PD is reported. |
| popPK | Pacifici_1983 | irrelevant | 1 | 2 | Oxazepam is only a urinary metabolite of pinazepam; PK parameters reported are for pinazepam, not oxazepam itself. |
| PGx | Patel_1995 | not_relevant | 2 | 5 | In vitro enzyme kinetics of oxazepam glucuronidation by UGT2B7 with inhibitor substrates; no gene variant/genotype effect on in vivo PK/PD parameters reported. |
| PGx | Reddy_2021 | not_relevant | 2 | 3 | Review of PBPK modeling of intestinal UGT metabolism; oxazepam mentioned only as a UGT substrate example, no gene variant/genotype effect on its PK reported. |
| PGx | Rushmore_2000 | not_relevant | 0 | 0 | In vitro bioreactor metabolite synthesis; no gene variant effect on oxazepam PK/PD in humans reported. |
| popPK | Sacre_2017 | irrelevant | 2 | 1 | This is a clinical toxicodynetics study of overdose time-courses, not a PK study reporting CL/V or a compartmental model, and no numeric disposition parameters appear. |
| popPK | Seddon_1989 | irrelevant | 2 | 2 | Oxazepam appears only as a minor metabolite of diazepam in an in vitro hepatocyte study; no PK disposition parameters for oxazepam itself are reported. |
| popPK | Seddon_1989_2 | irrelevant | 0 | 0 | Oxazepam appears only as a metabolite of diazepam in an in vitro hepatocyte study; no oxazepam disposition parameters are reported. |
| PGx | Serkland_2021 | not_relevant | 3 | 1 | Abstract only mentions a genetic polymorphism explaining prolonged diazepam metabolite detection without any gene, variant, or quantitative PK effect for oxazepam. |
| PGx | Skoda_2020 | not_relevant | 0 | 0 | Paper studies oxazepam as a CAR ligand/activator in vitro; no gene variant effect on oxazepam PK/PD parameters is reported. |
| popPK | Smink_2008 | relevant | 5 | 3 | Human PK study fitting one-compartment models to oxazepam and its glucuronide, but no numeric disposition parameters (CL, V, t½) appear in the evidence. |
| popPK | Srivastava_1999 | irrelevant | 0 | 0 | The evidence contains only GROBID boilerplate metadata with no paper content, no PK parameters, and no numeric values. |
| PGx | Treluyer_1997 | not_relevant | 2 | 3 | Reports developmental ontogeny of CYP2C and diazepam metabolism, not a gene variant/genotype effect on oxazepam PK/PD. |
| PGx | Turpeinen_2006 | not_relevant | 0 | 0 | Paper compares CYP inhibition assay methods for oxazepam as an inhibitor, with no gene variant/genotype effect on oxazepam PK/PD. |
| PGx | Vrzal_2010 | not_relevant | 0 | 0 | In vitro CYP induction study with no gene variant/genotype effect on oxazepam PK/PD parameters. |
| popPK | Wang_2020 | irrelevant | 3 | 7 | Oxazepam appears only as a metabolite of diazepam (the subject drug); its tmax, Cmax and half-life values are reported, but no clearance/volume or PK model for oxazepam itself as the dosed drug. |
| popPK | Wang_2022 | irrelevant | 2 | 3 | Oxazepam appears only as a metabolite of diazepam (as oxazepam glucuronide); oxazepam itself was never detected and no oxazepam PK parameters are reported, though OG half-life (536.44 h) is in the text. |
| popPK | Xiao_2026 | irrelevant | 2 | 2 | The subject drug is diazepam; oxazepam appears only as a metabolite with no separate PK parameters reported for it. |
| popPK | Yuan_1993 | relevant | 7 | 2 | Oxazepam disposition kinetics (absorption/elimination half-lives, one-compartment model) are modeled in dosed feed/water studies, but no numeric parameter values for oxazepam appear in the provided evidence. |
| popPK | Yuan_1994 | relevant | 7 | 4 | Toxicokinetic study of oxazepam in rats and mice with compartmental modeling, but numeric values (half-lives, bioavailability) are only summarized in the abstract; detailed CL/V parameters likely in tables not provided. |
| PGx | Zhang_2023 | not_relevant | 6 | 5 | In vitro UGT2B15 variant effects on oxazepam glucuronidation enzyme activity, not an in vivo PK/PD parameter change. |
| PGx | Zhou_2025 | not_relevant | 3 | 2 | Study predicts "abnormal metabolism" (genotype-based phenotype) from clinical factors via nomograms; no gene variant effect on a PK/PD parameter of oxazepam is reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 19:56 UTC</sub>

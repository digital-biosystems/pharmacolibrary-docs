<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01J&quot;,&quot;href&quot;:&quot;atc/S01J.md&quot;},{&quot;label&quot;:&quot;Rose bengal&quot;}]"></div>

# Rose bengal

- **generic name:** Rose bengal
- **ATC codes:** `S01JA02`
- **DrugBank:** [DB11182](https://go.drugbank.com/drugs/DB11182) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Rose bengal is a colouring agent used as an ophthalmological diagnostic agent to stain damaged cells on the eye surface. It is an approved diagnostic dye used in eye examinations, and has also been investigated for other uses.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:12 | 2:00 | 0/1/0 | 0/1/0 | 0/0/0 | 239,343/10,672 | einfracz / qwen3.8-27b | 9 | 1/5 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wang_1992_reference](drugs/drug_rose_bengal/RoseBengal_Wang1992_reference.md) | — | 1-compartment (no model) | 0 | Wang HK et al., Nonlinear pharmacokinetics of hepatobil…, Biopharmaceutics & drug dis… (1992) | [10.1002/bdd.2510130903](https://doi.org/10.1002/bdd.2510130903) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Furumiya_2008_CYP3A4](drugs/drug_rose_bengal/pd_Furumiya_2008_CYP3A4.md) | CYP3A4 activity ← rose bengal · direct Emax (saturable) effect | — | Furumiya K et al., Inhibition of human CYP3A4, UGT1A6, and…, Journal of toxicology and e… (2008) | [10.1080/15287390802240751](https://doi.org/10.1080/15287390802240751) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Furumiya_2008_P_gp](drugs/drug_rose_bengal/pd_Furumiya_2008_P_gp.md) | P-glycoprotein activity ← rose bengal · direct Emax (saturable) effect | — | Furumiya K et al., Inhibition of human CYP3A4, UGT1A6, and…, Journal of toxicology and e… (2008) | [10.1080/15287390802240751](https://doi.org/10.1080/15287390802240751) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Furumiya_2008_UGT1A6](drugs/drug_rose_bengal/pd_Furumiya_2008_UGT1A6.md) | UGT1A6 activity ← rose bengal · direct Emax (saturable) effect | — | Furumiya K et al., Inhibition of human CYP3A4, UGT1A6, and…, Journal of toxicology and e… (2008) | [10.1080/15287390802240751](https://doi.org/10.1080/15287390802240751) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=rose_bengal) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: LTF (binder), LYZ (target), TF (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 86 matched, 41 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pirotte_1980.pdf` | Pirotte J, Study of 131I-rose bengal kinetics in n…, Biomedicine / [publiee pour… (1980) | popPK | 10 | not captured | [7370377](https://pubmed.ncbi.nlm.nih.gov/7370377) | The paper describes a 3-compartment PK model for rose bengal in humans, but the evidence text contains only qualitative descriptions of the model assumptions without the specific numeric parameter values (CL, V, Q, ka). |
| `Wang_1992.pdf` | Wang HK et al., Nonlinear pharmacokinetics of hepatobil…, Biopharmaceutics & drug dis… (1992) | popPK | 10 | [10.1002/bdd.2510130903](https://doi.org/10.1002/bdd.2510130903) | [1467452](https://pubmed.ncbi.nlm.nih.gov/1467452) | The paper reports nonlinear PK parameters (Vmax, Km, Tm) and qualitative clearance changes for rose bengal in rats with specific numeric values provided in the abstract. |
| `Galli_1981.pdf` | Galli G et al., Functional study with 131I-rose bengal…, European journal of nuclear… (1981) | popPK | 9 | [10.1007/BF00266419](https://doi.org/10.1007/BF00266419) | [7215372](https://pubmed.ncbi.nlm.nih.gov/7215372) | The paper reports a quantitative three-compartment pharmacokinetic model for rose bengal in humans, but the abstract only provides specific coefficients for the discrimination function (L) and qualitative significance statements (lower K32) without listing the actual parameter values (K12, K21, K32, RI) for the compartments. |
| `Dickinson_1997.pdf` | Dickinson KE et al., Nucleotide regulation and characteristi…, Molecular pharmacology (1997) | pd | 4 | [10.1124/mol.52.3.473](https://doi.org/10.1124/mol.52.3.473) | [9281610](https://www.ncbi.nlm.nih.gov/pubmed/9281610) | metadata signals extractable PD data (EC50) |
| `Fukuzawa_1998.pdf` | Fukuzawa K et al., Singlet oxygen scavenging by alpha-toco…, BioFactors (Oxford, England) (1998) | pd | 4 | [10.1002/biof.5520070106](https://doi.org/10.1002/biof.5520070106) | [9523026](https://www.ncbi.nlm.nih.gov/pubmed/9523026) | metadata signals extractable PD data (IC50) |
| `Yachi_1989.pdf` | Yachi K et al., Characterization of Rose Bengal binding…, Biochimica et biophysica ac… (1989) | pd | 4 | [10.1016/0005-2736(89)90490-2](https://doi.org/10.1016/0005-2736(89)90490-2) | [2914125](https://www.ncbi.nlm.nih.gov/pubmed/2914125) | metadata signals extractable PD data (IC50) |
| `Kazmi_2014.pdf` | Kazmi F et al., In vitro inhibition of human liver cyto…, Xenobiotica; the fate of fo… (2014) | pgx | 7 | [10.3109/00498254.2013.878814](https://doi.org/10.3109/00498254.2013.878814) | [24405273](https://www.ncbi.nlm.nih.gov/pubmed/24405273) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T21:10:50.420659+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Chuman_2014 | not_relevant | 0 | 0 | The paper discusses the use of rose bengal as a tool to create a photochemical model of disease (NAION) and tests the efficacy of other treatments (L-arginine), but it does not report on pharmacogenomic effects (gene variants) on the pharmacokinetics or pharmacodynamics of rose bengal itself. |
| popPK | Cui_2025 | irrelevant | 0 | 0 | The paper is a study on antimicrobial photodynamic therapy against fungi where Rose Bengal is used only as a commercial comparator, with no pharmacokinetic parameters reported. |
| popPK | Dickinson_1997 | irrelevant | 0 | 0 | The paper is an in-vitro binding study on skeletal muscle membranes where rose bengal is used only as a test ligand/inhibitor, not a subject of pharmacokinetic analysis. |
| PGx | Furumiya_2008 | not_relevant | 0 | 0 | The paper reports drug-enzyme/transporter interactions (DII) caused by food dyes, not pharmacogenomic (gene variant) effects on the PK/PD of rose bengal. |
| popPK | Galli_1981 | relevant | 9 | 3 | The paper reports a quantitative three-compartment pharmacokinetic model for rose bengal in humans, but the abstract only provides specific coefficients for the discrimination function (L) and qualitative significance statements (lower K32) without listing the actual parameter values (K12, K21, K32, RI) for the compartments. |
| popPK | Kaibara_1988 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of intracellular protons on calcium channels in guinea-pig ventricular myocytes, using Rose Bengal only as a tool for photo-oxidation to probe histidine residues, not as a subject drug for pharmacokinetic analysis. |
| PGx | Kazmi_2014 | not_relevant | 0 | 0 | The study evaluates in vitro CYP and UGT inhibition (drug-drug interaction potential) rather than any gene variant or genotype effect on the PK/PD of rose bengal. |
| PGx | Kim_2012 | not_relevant | 0 | 0 | The paper investigates retinoic acid's effect on corneal cell differentiation and uses rose bengal as a barrier function assay; it does not report pharmacogenomic effects on the PK/PD of rose bengal. |
| PGx | Mizutani_2009 | not_relevant | 0 | 0 | The study investigates the toxicological inhibitory effects of rose bengal on drug-metabolizing enzymes and transporters, not how a specific gene variant or genotype affects the PK or PD of rose bengal. |
| popPK | Nigam_1993 | irrelevant | 0 | 0 | Rose Bengal is used as a glutathione S-transferase inhibitor in an in-vitro study of glyceryl trinitrate, not as the subject drug for pharmacokinetic analysis. |
| popPK | Okabe_2025 | irrelevant | 0 | 0 | The paper is a neuroscience study on stroke recovery in mice and does not report pharmacokinetic parameters for rose bengal. |
| popPK | Pirotte_1979 | irrelevant | 4 | 0 | The paper discusses the suitability of 131I Rose Bengal for compartmental analysis of hepatic clearance but does not report specific quantitative PK parameters (CL, V, t1/2) in the provided evidence. |
| popPK | Pirotte_1980 | relevant | 10 | 2 | The paper describes a 3-compartment PK model for rose bengal in humans, but the evidence text contains only qualitative descriptions of the model assumptions without the specific numeric parameter values (CL, V, Q, ka). |
| popPK | Poirel_2020 | irrelevant | 0 | 0 | The paper is a pharmacological study on VGLUT inhibitors (LSP5-2157) using in vitro and ex vivo models, and Rose Bengal is only mentioned as a reference compound without any pharmacokinetic parameter data. |
| popPK | Shiao_2019 | irrelevant | 0 | 0 | The paper investigates rose bengal as a comparator photosensitizer for photodynamic insecticidal activity (EC50 for larvicidal effect), not as a subject for pharmacokinetic or population-PK analysis. |
| popPK | Sugimoto_1993 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for indocyanine green (ICG), not rose bengal; rose bengal is only used as a substrate for in vitro binding studies. |
| popPK | Tassonyi_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pipecuronium, using rose bengal only as a radiolabeled reagent for quantification, not as the subject drug. |
| popPK | Turco_1966 | irrelevant | 0 | 0 | no_text gate: only 123 chars of text extracted (&lt; 400) |
| popPK | Turco_1968 | irrelevant | 0 | 0 | no_text gate: only 154 chars of text extracted (&lt; 400) |
| PGx | Vig_2024 | not_relevant | 2 | 2 | The study investigates the transport of rose bengal by overexpressed ABC transporters in cell lines, focusing on intracellular accumulation and PDT resistance, but it does not report in vivo pharmacokinetic or pharmacodynamic parameters modulated by specific human gene variants/polymorphisms in a clinical cohort. |
| popPK | Wesołowski_2026 | irrelevant | 0 | 0 | The paper is a review of oxidative stress mechanisms in Acanthamoeba keratitis and contains no pharmacokinetic data for rose bengal. |
| popPK | Zinsstag_2005 | irrelevant | 0 | 0 | The paper discusses a brucellosis transmission model where the Rose Bengal test is used as a serological diagnostic, not a pharmacokinetic study of the dye itself. |
| popPK | de_1980 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:10 UTC</sub>

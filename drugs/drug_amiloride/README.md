<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03D&quot;,&quot;href&quot;:&quot;atc/C03D.md&quot;},{&quot;label&quot;:&quot;amiloride&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amiloride_Jain2026_reference&quot;,&quot;label&quot;:&quot;Jain_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_amiloride/Amiloride_Jain2026_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# amiloride

- **generic name:** amiloride
- **ATC codes:** `C03DB01`
- **DrugBank:** [DB00594](https://go.drugbank.com/drugs/DB00594) · **PubChem:** [CID 16231](https://pubchem.ncbi.nlm.nih.gov/compound/16231)
- **molar mass:** 229.627 g/mol (C6H8ClN7O) — DrugBank
- **groups:** approved, investigational

## About

**Description.** A pyrazine compound inhibiting sodium reabsorption through sodium channels in renal epithelial cells. This inhibition creates a negative potential in the luminal membranes of principal cells, located in the distal convoluted tubule and collecting duct. Negative potential reduces secretion of potassium and hydrogen ions. Amiloride is used in conjunction with diuretics to spare potassium loss. (From Gilman et al., Goodman and Gilman's The Pharmacological Basis of Therapeutics, 9th ed, p705)

**Indication.** For use as adjunctive treatment with thiazide diuretics or other kaliuretic-diuretic agents in congestive heart failure or hypertension.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| amiloride | parent | 229.627 | C6H8ClN7O | DrugBank | [16231](https://pubchem.ncbi.nlm.nih.gov/compound/16231) | Jain_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 10:02 | 27:46 | 0/1/0 | 0/0/0 | 0/0/0 | 59,299/8,683 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/2 | 3/0 | 0 |

## popPK records

| status | detail | model structure | params | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>route_to: `human_review`</sub> | [Jain_2026_reference](drugs/drug_amiloride/Amiloride_Jain2026_reference.md) | 1-compartment (no model) | 4 | Jain M et al., Population Pharmacokinetics of Intranas…, European journal of drug me… (2026) | [10.1007/s13318-026-01011-3](https://doi.org/10.1007/s13318-026-01011-3) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=amiloride) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A4` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC22A4` inhibitor | DrugBank actor |
| metabolism | kidney | <sub>“…t metabolized by the liver but is excreted unchanged by the kidneys.…”</sub> | prose |
| metabolism | liver | <sub>“…Amiloride is not metabolized by the liver but is excreted unchanged by the kidneys.…”</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor | DrugBank actor |
| excretion | liver | <sub>“…Amiloride HCl is not metabolized by the liver but is excreted unchanged by the kidneys. Ab…”</sub> | prose |

<sub>Actors without a tissue in the table: AOC1 (inhibitor), ASIC1 (inhibitor), ASIC2 (inhibitor), PLAU (inhibitor), SCNN1A (inhibitor), SCNN1B (inhibitor), SCNN1D (inhibitor), SCNN1G (inhibitor), SLC9A1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 248 matched, 38 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jain_2026.pdf` | Jain M et al., Population Pharmacokinetics of Intranas…, European journal of drug me… (2026) | popPK | 10 | [10.1007/s13318-026-01011-3](https://doi.org/10.1007/s13318-026-01011-3) | [42236625](https://pubmed.ncbi.nlm.nih.gov/42236625) | The paper reports a population PK model for amiloride with specific numeric values for clearance, volume, and absorption rate constants present in the text. |
| `Segre_1998.pdf` | Segre G et al., Amiloride pharmacokinetics in rat, European journal of drug me… (1998) | popPK | 9 | [10.1007/BF03189343](https://doi.org/10.1007/BF03189343) | [9725485](https://pubmed.ncbi.nlm.nih.gov/9725485) | The paper describes a compartmental PK study for amiloride in rats, but the provided evidence contains only the abstract/methodology description without any numeric parameter values. |
| `Savic_2007.pdf` | Savic RM et al., Implementation of a transit compartment…, Journal of pharmacokinetics… (2007) | popPK | 8 | [10.1007/s10928-007-9066-0](https://doi.org/10.1007/s10928-007-9066-0) | [17653836](https://pubmed.ncbi.nlm.nih.gov/17653836) | The paper is a population PK study including amiloride, but the specific numeric parameter values are not present in the provided evidence. |
| `Snelder_2014.pdf` | Snelder N et al., Drug effects on the CVS in conscious ra…, British journal of pharmaco… (2014) | pd | 5 | [10.1111/bph.12824](https://doi.org/10.1111/bph.12824) | [24962208](https://www.ncbi.nlm.nih.gov/pubmed/24962208) | metadata signals extractable PD data (PKPD) |

<sub>queue written 2026-09-28T09:55:58.412552+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bukanova_2025 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of receptor binding interactions, not a pharmacokinetic study, and reports no disposition parameters for amiloride. |
| popPK | Cargnelli_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of amiloride's effect on cardiac contractility and ouabain toxicity, reporting no pharmacokinetic parameters. |
| PGx | Chu_2003 | not_relevant | 0 | 0 | The paper investigates the transcriptional regulation of the ENaC alpha-subunit by Sp1/Sp3 and PP1, but does not report any pharmacogenomic effects of genetic variants on the pharmacokinetics or pharmacodynamics of amiloride. |
| popPK | Coimbra_2025 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral screening study where amiloride is only a hit compound/comparator, not a PK study. |
| PGx | Corvol_1997 | not_relevant | 0 | 0 | The paper discusses the molecular genetics of hypertension and mentions amiloride only as a therapeutic agent for Liddle's syndrome, without reporting any pharmacogenomic effects on amiloride's PK or PD parameters. |
| popPK | Epstein_1985 | irrelevant | 0 | 0 | The paper is a mechanistic study of ion transport in elasmobranch rectal glands where amiloride is only mentioned as a non-inhibitor, with no pharmacokinetic parameters reported. |
| PD | Epstein_1985 | not_relevant | 0 | 0 | The paper discusses the mechanism of Na-K-Cl cotransport and notes that amiloride does not inhibit it, but it does not report any exposure-response or dose-response relationship or numeric PD parameters for amiloride. |
| popPK | Huf_1982 | irrelevant | 0 | 0 | The study focuses on ion transport kinetics in frog skin using amiloride as a blocking agent, not on the pharmacokinetic disposition parameters of amiloride itself. |
| PGx | Irvin_2010 | not_relevant | 0 | 0 | The study examines the effect of a gene variant on fasting glucose (a metabolic outcome) in patients treated with amlodipine or chlorthalidone, not the PK/PD of amiloride. |
| PGx | Ito_2004 | not_relevant | 0 | 0 | The paper describes bacterial motility and the use of an amiloride analogue as a chemical inhibitor, not the pharmacokinetics or pharmacodynamics of amiloride in humans or the effect of human gene variants on amiloride response. |
| PGx | Kalyanasundar_2023 | not_relevant | 0 | 0 | The paper investigates taste receptor genetics and neural responses to sugars, using amiloride only as a pharmacological tool to characterize sodium channels, not as a drug subject to pharmacogenomic analysis. |
| popPK | Kimura_1987 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of sodium-calcium exchange in guinea-pig ventricular cells where amiloride is used only as a partial blocker, not as the subject of pharmacokinetic analysis. |
| PD | Kimura_1987 | not_relevant | 0 | 0 | The paper investigates the biophysical properties of the Na-Ca exchange current in single cells; amiloride is only mentioned as a partial blocker without any quantitative dose-response or exposure-response analysis. |
| popPK | Lazdunski_1985 | irrelevant | 0 | 0 | The paper is a mechanistic study of the Na+/H+ exchanger in cardiac cells, not a pharmacokinetic study, and contains no disposition parameters for amiloride. |
| PGx | Mordasini_2015 | not_relevant | 0 | 0 | The study investigates the role of the ENaC channel in cirrhosis using knockout mice, but does not report pharmacokinetic or pharmacodynamic parameters of the drug amiloride itself. |
| popPK | Morel_1975 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment on frog skin where amiloride is used as a pharmacological blocker, not a PK study reporting disposition parameters for amiloride. |
| PGx | Mroz_2019 | not_relevant | 0 | 0 | The paper investigates the effect of ursodeoxycholic acid (UDCA) on ion transport, not the pharmacokinetics or pharmacodynamics of amiloride. |
| PGx | Mukherjee_2020 | not_relevant | 0 | 0 | The paper investigates a therapeutic strategy (mRNA delivery) to inhibit ENaC channels, not the effect of a genetic variant on the pharmacokinetics or pharmacodynamics of amiloride. |
| popPK | Murphy_1990 | irrelevant | 0 | 0 | The study is a mechanistic investigation of Na+-H+ exchange in the choroid plexus where amiloride is used only as a pharmacological inhibitor, not as the subject of pharmacokinetic analysis. |
| popPK | Ogando_2013 | irrelevant | 0 | 0 | The paper is a mechanistic study on the SLC4A11 transporter in cells, using amiloride derivatives only as inhibitors, and contains no pharmacokinetic parameters for amiloride. |
| PGx | Qadri_2012 | not_relevant | 0 | 0 | The paper uses amiloride as a tool compound to inhibit calcium entry in an erythrocyte model, not to study the pharmacokinetics or pharmacodynamics of amiloride itself in relation to a gene variant. |
| popPK | Radji_2025 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of ocular ion transport where amiloride is used only as a pharmacological tool to identify ENaC channels, not as a subject drug for PK analysis. |
| PD | Radji_2025 | not_relevant | 1 | 0 | The paper identifies amiloride as a blocker of ENaC in a qualitative mechanistic study but does not report a quantitative concentration-effect curve or numeric PD parameters (e.g., IC50) for amiloride. |
| PGx | Raikwar_2008 | not_relevant | 0 | 0 | The paper describes a molecular mechanism of Sgk1 variants affecting amiloride-sensitive sodium transport in a heterologous expression system, not a pharmacogenomic effect on the PK or PD of amiloride in humans. |
| PGx | Rybakowski_2013 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics of mood stabilizers (lithium, valproate, etc.) and mentions the ACCN1 gene (amiloride-sensitive channel) only in the context of lithium response, not the pharmacokinetics or pharmacodynamics of the drug amiloride. |
| PGx | Sahai_1994 | not_relevant | 0 | 0 | The paper investigates renal ammoniagenesis and Na/H antiporter mechanisms in cell lines, not the pharmacokinetics or pharmacodynamics of amiloride as a therapeutic drug. |
| popPK | Savic_2007 | relevant | 8 | 0 | The paper is a population PK study including amiloride, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Segre_1998 | relevant | 9 | 0 | The paper describes a compartmental PK study for amiloride in rats, but the provided evidence contains only the abstract/methodology description without any numeric parameter values. |
| PGx | Smit_2018 | not_relevant | 0 | 0 | The paper discusses lipid variability and mentions ACCN1 (an amiloride-sensitive channel) as a genetic locus, but it does not report a pharmacogenomic effect on the PK or PD of the drug amiloride. |
| popPK | Snelder_2014 | irrelevant | 0 | 0 | no_text gate: only 123 chars of text extracted (&lt; 400) |
| PD | Snelder_2014 | not_relevant | 0 | 0 | The provided text is a title and does not contain the full text or any numeric PD parameters for amiloride. |
| PGx | Sparfel_2004 | not_relevant | 0 | 0 | The paper investigates the inhibition of CYP1 enzymes by amiloride derivatives, not the effect of genetic variants on amiloride's pharmacokinetics or pharmacodynamics. |
| popPK | Stokes_1984 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology experiment on renal tubules where amiloride is used as a tool to block ENaC, not as the subject of pharmacokinetic analysis. |
| popPK | Todorovic_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology paper investigating the pharmacological block of T-type calcium currents by amiloride, not a pharmacokinetic study. |
| popPK | Tomlinson_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of calcium flux in rat lenses where amiloride is used only as a comparator agent, not as the subject drug for PK parameter estimation. |
| PGx | Wan_2010 | not_relevant | 0 | 0 | The paper studies Wilson disease and ATP7B mutations; amiloride is used only as a tool compound to modulate splicing, not as the subject of a pharmacogenomic PK/PD analysis. |
| PGx | Wang_2023 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of an amiloride analog (EIPA) in cancer cells, not the effect of human genetic variants on the pharmacokinetics or pharmacodynamics of amiloride. |
| PGx | Wu_2024 | not_relevant | 0 | 0 | The paper studies the effect of silica nanoparticles on cadmium uptake in protozoa, using amiloride only as a tool to identify transporters, and does not report any pharmacogenomic effects on amiloride's PK or PD. |
| PGx | Yang_2020 | not_relevant | 0 | 0 | The paper investigates the physiological role of aldosterone and ENaC in mice, using amiloride only as a tool to measure channel activity, rather than reporting a pharmacogenomic effect on amiloride's PK or PD parameters. |
| PGx | Zachar_2022 | not_relevant | 0 | 0 | The paper investigates the role of MASP-2 in ENaC activation and does not report any pharmacogenomic effects of gene variants on the pharmacokinetics or pharmacodynamics of amiloride. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 09:56 UTC</sub>

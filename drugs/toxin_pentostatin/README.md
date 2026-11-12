<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Pentostatin&quot;}]"></div>

# Pentostatin

- **generic name:** Pentostatin
- **T3DB:** [T3D2822](http://www.t3db.ca/toxins/T3D2822) · **DrugBank:** [DB00552](https://go.drugbank.com/drugs/DB00552) · **PubChem:** [CID 439693](https://pubchem.ncbi.nlm.nih.gov/compound/439693)
- **groups:** approved, investigational

## About

Pentostatin is only found in individuals that have used or taken this drug. It is a potent inhibitor of adenosine deaminase. The drug is effective in the treatment of many lymphoproliferative malignancies, particularly hairy-cell leukemia. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** not absorbed orally, crosses blood brain barrier.
- **Sources and uses:** For the treatment of hairy cell leukaemia refractory to alpha interferon.
- **Mechanism of toxicity:** Pentostatin is a potent transition state inhibitor of adenosine deaminase (ADA), the greatest activity of which is found in cells of the lymphoid system. T-cells have higher ADA activity than B-cells, and T-cell malignancies have higher activity than B-cell malignancies. …
- **Health effects:** Antibiotic resistance
- **Acute toxicity:** LD50=128 mg/kg (mouse)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2822">T3DB T3D2822</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 53910-25-1</small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| 2'-deoxycoformycin (pentostatin) | parent | 268.273 | C11H16N4O4 | PubChem | [439693](https://pubchem.ncbi.nlm.nih.gov/compound/439693) | McConnell_1979 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: a value printed only as a range — the record carries its midpoint</sub> | [McConnell_1979_reference](drugs/toxin_pentostatin/Pentostatin_McConnell1979_reference.md) | — | retention function (no model) | 1 | McConnell WR et al., Pharmokinetics of 2'-deoxycoformycin in…, Drug metabolism and disposi… (1979) | — |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Geiger_1987_reference](drugs/toxin_pentostatin/Pentostatin_Geiger1987_reference.md) | — | 1-compartment (no model) | 0 | Geiger JD et al., Pharmacokinetics of 2'-deoxycoformycin,…, Neuropharmacology (1987) | [10.1016/0028-3908(87)90103-1](https://doi.org/10.1016/0028-3908(87)90103-1) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [do_2019_LD50](drugs/toxin_pentostatin/pd_do_2019_LD50.md) | Lethal dose of epimastigotes ← pentostatin · inhibition effect | — | do Carmo GM et al., Cordycepin (3'-deoxyadenosine) and pent…, Experimental parasitology (2019) | [10.1016/j.exppara.2019.02.016](https://doi.org/10.1016/j.exppara.2019.02.016) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Venner_1981_plasma_concentrations_of_adenosine](drugs/toxin_pentostatin/pd_Venner_1981_plasma_concentrations_of_adenosine.md) | plasma concentrations of adenosine biomarker turnover ← pentostatin | — | Venner PM et al., Levels of 2'-deoxycoformycin, adenosine…, Cancer research (1981) | — |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Venner_1981_plasma_concentrations_of_deoxyadenosine](drugs/toxin_pentostatin/pd_Venner_1981_plasma_concentrations_of_deoxyadenosine.md) | plasma concentrations of deoxyadenosine biomarker turnover ← pentostatin | — | Venner PM et al., Levels of 2'-deoxycoformycin, adenosine…, Cancer research (1981) | — |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Venner_1981_urine_concentrations_of_deoxyadenosine](drugs/toxin_pentostatin/pd_Venner_1981_urine_concentrations_of_deoxyadenosine.md) | urine concentrations of deoxyadenosine biomarker turnover ← pentostatin | — | Venner PM et al., Levels of 2'-deoxycoformycin, adenosine…, Cancer research (1981) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pentostatin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | brain | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADA (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 17:43 | 10:30 | 1/1/0 | 1/1/0 | 0/0/0 | 265,914/16,530 | einfracz / qwen3.8-27b | 5 | 1/2 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 69 matched, 68 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Geiger_1987.pdf` | Geiger JD et al., Pharmacokinetics of 2'-deoxycoformycin,…, Neuropharmacology (1987) | popPK | 10 | [10.1016/0028-3908(87)90103-1](https://doi.org/10.1016/0028-3908(87)90103-1) | [3499581](https://pubmed.ncbi.nlm.nih.gov/3499581) | The paper reports specific quantitative half-lives (1-5 hr and 50 hr) and a two-compartment model for 2'-deoxycoformycin (pentostatin) in rats. |
| `King_1981.pdf` | King FG et al., Physiologic model for the pharmacokinet…, Journal of pharmacokinetics… (1981) | popPK | 10 | [10.1007/BF01061024](https://doi.org/10.1007/BF01061024) | [6977636](https://pubmed.ncbi.nlm.nih.gov/6977636) | Paper describes a physiologic pharmacokinetic model for pentostatin (2'deoxycoformycin) in mice, but specific numeric parameter values are not explicitly listed in the provided abstract evidence. |
| `Lathia_2002.pdf` | Lathia C et al., Pentostatin pharmacokinetics and dosing…, Cancer chemotherapy and pha… (2002) | popPK | 10 | [10.1007/s00280-002-0468-9](https://doi.org/10.1007/s00280-002-0468-9) | [12172976](https://pubmed.ncbi.nlm.nih.gov/12172976) | The paper reports pharmacokinetic studies in humans but the evidence text describes the trends and correlations without providing the specific numeric values for clearance, half-life, or other parameters. |
| `McConnell_1979.pdf` | McConnell WR et al., Pharmokinetics of 2'-deoxycoformycin in…, Drug metabolism and disposi… (1979) | popPK | 10 |  | [35319](https://pubmed.ncbi.nlm.nih.gov/35319) | The paper reports explicit quantitative pharmacokinetic parameters (half-lives, volume of distribution, excretion rates) for 2'-deoxycoformycin (pentostatin) in mice. |
| `Arima_2005.pdf` | Arima N et al., [Pentostatin treatment for a patient wi…, [Rinsho ketsueki] The Japan… (2005) | popPK | 9 |  | [16440802](https://pubmed.ncbi.nlm.nih.gov/16440802) | The paper reports the application of a 2-compartment pharmacokinetic model to fit measured plasma concentration-time data for pentostatin in a patient, though specific numeric parameter values are not explicitly listed in the provided evidence text. |

<sub>queue written 2026-11-11 17:39 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmadi_2026 | irrelevant | 0 | 0 | The paper is a computational virtual screening study using pentostatin only as a reference ligand for pharmacophore modeling, containing no quantitative toxicokinetic parameters (half-life, clearance, etc.) for pentostatin. |
| popPK | Aldinucci_2000 | irrelevant | 0 | 0 | The paper reports on cytotoxic effects and clinical response to pentostatin but contains no quantitative toxicokinetic parameters (e.g., clearance, half-life, volume of distribution). |
| popPK | Arima_2005 | relevant | 9 | 3 | The paper reports the application of a 2-compartment pharmacokinetic model to fit measured plasma concentration-time data for pentostatin in a patient, though specific numeric parameter values are not explicitly listed in the provided evidence text. |
| popPK | Bouroncle_1987 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting therapeutic outcomes and dosage adjustments, containing no quantitative toxicokinetic parameters (e.g., half-life, clearance, volume of distribution) for pentostatin. |
| popPK | Burnette_1991 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of 6-methoxypurine arabinoside (ara-M), not pentostatin. |
| popPK | Cross_2020 | irrelevant | 0 | 0 | The paper is a review of Hairy Cell Leukaemia treatment and pathogenesis, mentioning pentostatin as a class of therapy but providing no quantitative toxicokinetic parameters. |
| PGx | Cross_2020 | not_relevant | 0 | 0 | The paper is a review of Hairy Cell Leukaemia diagnostics and treatments, mentioning pentostatin (PNA) but providing no pharmacogenomic data or PK/PD analysis. |
| popPK | Dalla_2015 | irrelevant | 0 | 0 | The paper is a dose-finding and efficacy study reporting toxicity and parasite clearance outcomes, with no quantitative toxicokinetic parameters (e.g., half-life, clearance, distribution volume) provided for pentostatin. |
| popPK | Eltzschig_2006 | irrelevant | 0 | 0 | The paper focuses on adenosine catabolism and adenosine deaminase (ADA) activity; pentostatin is not mentioned, and the inhibitor used is deoxycoformycin. |
| PGx | Friedman_2009 | not_relevant | 0 | 0 | The paper focuses on gene expression signatures for clinical response and prognosis in CLL, not on the effect of specific genetic variants on the pharmacokinetics or pharmacodynamics of pentostatin. |
| popPK | Furstenau_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for alemtuzumab, while pentostatin is only mentioned as part of the conditioning regimen name (Pento-Cy-Alem-TBI) and not as the subject of kinetic analysis. |
| popPK | Gandhi_2002 | irrelevant | 0 | 0 | The study focuses on 8-chloro-adenosine pharmacokinetics; pentostatin (dCF) is only used as a mechanistic inhibitor/comparator, not as the subject substance for kinetic parameter extraction. |
| PGx | Hatse_1999 | not_relevant | 0 | 0 | The paper studies a novel derivative (cPr-PMEDAP) and its interaction with deaminase enzymes, but does not report pharmacogenomic effects on the PK/PD of pentostatin. |
| popPK | Jehn_1989 | irrelevant | 0 | 0 | The paper discusses amsacrine (mAMSA) and other leukemia drugs, but does not report kinetic parameters for pentostatin. |
| popPK | Johnson_2000 | irrelevant | 0 | 0 | The paper is a review of clinical pharmacokinetics but provides no specific numeric kinetic parameters for pentostatin in the extracted evidence. |
| popPK | Johnston_1986 | irrelevant | 1 | 0 | The paper reports a clinical outcome study in humans with no quantitative toxicokinetic parameters (e.g., half-life, clearance) for pentostatin. |
| popPK | Kane_1992 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy and adverse effects that does not report specific quantitative toxicokinetic parameters (such as half-life, clearance, or volume of distribution) in the provided text. |
| popPK | Keil_1994 | irrelevant | 0 | 0 | The paper studies the pharmacological effects of adenosine pathway inhibitors (including deoxycoformycin, a pentostatin analog) on antinociception in mice, but does not report quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for pentostatin itself. |
| popPK | Kraut_1986 | irrelevant | 0 | 0 | The paper is a clinical outcome study reporting clinical response and toxicity, with no quantitative toxicokinetic parameters (e.g., half-life, clearance) for pentostatin. |
| popPK | Kuttesch_1982 | irrelevant | 0 | 0 | The paper studies the renal handling of 2'-deoxyadenosine and adenosine, using pentostatin (deoxycoformycin) only as an inhibitor to alter purine metabolism, not as the subject substance for kinetic parameter extraction. |
| popPK | Lambe_1992 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of 6-dimethylaminopurine arabinoside (ara-DMAP), not pentostatin. |
| popPK | Lathia_2002 | relevant | 10 | 2 | The paper reports pharmacokinetic studies in humans but the evidence text describes the trends and correlations without providing the specific numeric values for clearance, half-life, or other parameters. |
| popPK | Luebke_1991 | irrelevant | 0 | 0 | The paper studies the immunological effects of 2'-deoxycoformycin (pentostatin) on malaria infection in mice and contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for the substance. |
| PGx | Luebke_1991 | not_relevant | 0 | 0 | The paper studies the immunological effects of an adenosine deaminase inhibitor on malaria infection in mice and does not report pharmacokinetic or pharmacodynamic parameters for pentostatin. |
| popPK | Major_1981 | irrelevant | 1 | 0 | The paper studies deoxycoformycin (a different substance) and pentostatin is not the subject of the kinetic analysis. |
| popPK | Murakami_1991 | irrelevant | 0 | 0 | The paper studies lipophilic 6-halo-2',3'-dideoxypurine nucleosides and their in vitro anti-HIV activity, with no mention or data regarding pentostatin (deoxycoformycin appears only as a mechanism probe for ADA inhibition, not as a subject with kinetic parameters). |
| popPK | Osuji_2006 | irrelevant | 0 | 0 | The paper is a clinical outcome study reporting response rates and toxicity for T-cell LGL leukemia treatment, with no quantitative toxicokinetic parameters for pentostatin. |
| PGx | Plagemann_1983 | not_relevant | 0 | 10 | The paper studies adenosine metabolism in cell lines using 2-deoxycoformycin as an inhibitor, but does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of pentostatin. |
| popPK | Plunkett_1996 | irrelevant | 0 | 0 | The paper is a review of pharmacology and the provided evidence contains no specific numeric toxicokinetic parameters. |
| popPK | Poi_2013 | irrelevant | 3 | 0 | The paper discusses pentostatin PK in humans (AUC) but provides no specific numeric kinetic parameters (half-life, clearance, etc.), only qualitative comparisons of AUC increases. |
| popPK | Rawat_2023 | irrelevant | 0 | 0 | The paper studies the inhibitor taxifolin and mentions deoxycoformycin (a related compound) but does not provide kinetic parameters for pentostatin. |
| PGx | Robak_2012 | not_relevant | 0 | 0 | The paper is a general review of purine nucleoside analogs and does not report specific pharmacogenomic effects on PK or PD parameters for pentostatin. |
| popPK | Shanafelt_2007 | irrelevant | 0 | 0 | The paper is a clinical outcome study regarding the tolerability and efficacy of a treatment regimen, reporting no quantitative toxicokinetic parameters (such as half-life, clearance, or volume of distribution) for pentostatin. |
| popPK | Singhal_1996 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for F-ddI and F-ddA, not pentostatin (2'-deoxycoformycin), which is used only as an inhibitor/co-exposure to block adenosine deaminase. |
| popPK | Sougawa_1984 | irrelevant | 0 | 0 | The paper focuses on ara-A pharmacokinetics, with pentostatin (referred to as 2'-deoxycoformycin) appearing only as a tool for inhibition, not as the subject of kinetic parameter extraction. |
| popPK | Spiers_1984 | irrelevant | 0 | 0 | The paper is a clinical case report describing therapeutic outcomes and side effects, with no quantitative toxicokinetic parameters (e.g., half-life, clearance) reported. |
| popPK | Stromski_1988 | irrelevant | 0 | 0 | The paper studies renal ATP recovery and function in rats using pentostatin (DCF) as an adenosine deaminase inhibitor, but reports no kinetic parameters (half-life, clearance, partition coefficients) for pentostatin itself. |
| popPK | Suwansukho_2026 | irrelevant | 0 | 0 | The paper focuses on honokiol and magnolol, and pentostatin is not mentioned or studied as a subject substance. |
| popPK | Terasaka_2003 | irrelevant | 0 | 0 | The paper focuses on the design of a new inhibitor (FR221647) and mentions pentostatin only as a reference compound without providing any kinetic parameters for pentostatin itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpentostatin%5D&body=Drug%3A%20pentostatin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_pentostatin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-11 17:39 UTC</sub>

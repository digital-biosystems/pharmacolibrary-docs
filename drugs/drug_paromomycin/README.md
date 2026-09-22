<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;paromomycin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Paromomycin_Lentzen1981_reference&quot;,&quot;label&quot;:&quot;Lentzen_1981_reference&quot;,&quot;href&quot;:&quot;drugs/drug_paromomycin/Paromomycin_Lentzen1981_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paromomycin_Verrest2021v2_reference&quot;,&quot;label&quot;:&quot;Verrest_2021_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_paromomycin/Paromomycin_Verrest2021v2_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Paromomycin_Verrest2023_reference&quot;,&quot;label&quot;:&quot;Verrest_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_paromomycin/Paromomycin_Verrest2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# paromomycin

- **generic name:** paromomycin
- **ATC codes:** `A07AA06`
- **DrugBank:** [DB01421](https://go.drugbank.com/drugs/DB01421)
- **groups:** approved, investigational

## About

**Description.** An oligosaccharide antibiotic produced by various streptomyces. [PubChem]

**Indication.** For the treatment of acute and chronic intestinal amebiasis (it is not effective in extraintestinal amebiasis). Also for the management of hepatic coma as adjunctive therapy.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 02:27 | 5:42 | 0/0/3 | 1/0/0 | 0/0/0 | 149,949/11,357 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 1/2 | 3/0 | 1 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs both; the m…</sub><br><sub>route_to: `human_review`</sub> | [Lentzen_1981_reference](drugs/drug_paromomycin/Paromomycin_Lentzen1981_reference.md) | Lentzen H et al., [Comparative study of serum levels and…, Arzneimittel-Forschung (1981) | — |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs both; the m…</sub><br><sub>blocking: nonlinear topology</sub><br><sub>route_to: `manual_model_class`</sub> | [Verrest_2021_2_reference](drugs/drug_paromomycin/Paromomycin_Verrest2021v2_reference.md) | Verrest L et al., Geographical Variability in Paromomycin…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01036-8](https://doi.org/10.1007/s40262-021-01036-8) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q30 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Verrest_2023_reference](drugs/drug_paromomycin/Paromomycin_Verrest2023_reference.md) | Verrest L et al., Population pharmacokinetics of a combin…, The Journal of antimicrobia… (2023) | [10.1093/jac/dkad286](https://doi.org/10.1093/jac/dkad286) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Seifert_2006](drugs/drug_paromomycin/pd_Seifert_2006_percent_inhibition_of_Leishmania_donovani_amast.md) | Seifert K et al., In vitro and in vivo interactions betwe…, Antimicrobial agents and ch… (2006) | [10.1128/AAC.50.1.73-79.2006](https://doi.org/10.1128/AAC.50.1.73-79.2006) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=paromomycin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: RPL10L (inhibitor), RPSA (inhibitor).</sub>

## Coverage

- **PubMed hits:** 22 matched, 14 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 3  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lentzen_1981.pdf` | Lentzen H et al., [Comparative study of serum levels and…, Arzneimittel-Forschung (1981) | popPK | 9 | not captured | [7198477](https://pubmed.ncbi.nlm.nih.gov/7198477) | The study reports quantitative PK parameters for paromomycin, including a one-compartment model, half-life (2.6 h), and Cmax (3.6 µg/ml). |

<sub>queue written 2026-09-22T02:22:44.439073+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chu_2026 | irrelevant | 2 | 0 | The study reports skin-to-plasma ratios and PK/PD outcomes rather than standard quantitative disposition parameters (CL, V, ka) for paromomycin. |
| popPK | Donegatti_2020 | irrelevant | 0 | 0 | The paper describes an analytical method (CZE-UV) for quantifying paromomycin in formulations and does not report any pharmacokinetic parameters. |
| PD | Donegatti_2020 | not_relevant | 0 | 0 | The paper describes a chromatographic analytical method (CZE-UV) for quantifying aminoglycosides and mentions a controlled release experiment fitted with a Hill equation, but it does not report any pharmacodynamic (exposure-response or dose-response) relationship or PD parameters for paromomycin. |
| popPK | Fatma_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of paromomycin as an antiviral agent, reporting no pharmacokinetic parameters. |
| popPK | Ferreira_2022 | irrelevant | 0 | 0 | The study is an in-vitro drug susceptibility assay for Leishmania isolates, not a pharmacokinetic study, and reports no PK parameters for paromomycin. |
| popPK | Kangussu-Marcolino_2022 | irrelevant | 0 | 0 | The paper is an in-vitro drug screening study for Entamoeba histolytica where paromomycin is only mentioned as part of the standard treatment regimen, with no pharmacokinetic data reported. |
| PD | Kangussu-Marcolino_2022 | not_relevant | 0 | 0 | The paper focuses on drug repurposing screening for Entamoeba histolytica and does not report any pharmacodynamic or exposure-response data for paromomycin. |
| popPK | Paixão_2018 | irrelevant | 2 | 0 | Paromomycin is used only as an external reference marker for validation, not as the subject of PK parameter estimation, and no quantitative PK values are provided in the evidence. |
| popPK | Rayamajhi_2026 | irrelevant | 0 | 0 | The study is a toxicological assessment of antibiotics on algae, not a pharmacokinetic study, and reports no disposition parameters for paromomycin. |
| popPK | Schupfner_2013 | irrelevant | 0 | 0 | The study is an in vitro efficacy assessment of anti-cryptosporidial drugs where paromomycin serves only as a comparator, with no pharmacokinetic parameters reported. |
| popPK | Seifert_2006 | irrelevant | 0 | 0 | The study focuses on in vitro and in vivo drug interactions (efficacy) of miltefosine with paromomycin, not on the pharmacokinetic disposition parameters of paromomycin. |
| PD | Seifert_2006 | not_relevant | 3 | 2 | The paper reports in vitro interaction indices (FICs) and in vivo activity enhancement indices (AEI) for drug combinations, but does not provide a pharmacodynamic model (e.g., Emax, EC50) or exposure-response relationship for paromomycin alone. |
| popPK | Seifert_2011 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic interaction assay, not a pharmacokinetic study, and reports no disposition parameters for paromomycin. |
| PD | Seifert_2011 | not_relevant | 3 | 2 | The paper reports in vitro drug interaction data (FICs) and mentions EC50/EC90 levels for classification, but does not provide the specific numeric concentration-effect curves or PD parameters for paromomycin alone or in combination that would allow derivation of a quantitative PD relationship. |
| popPK | Zhang_2009 | irrelevant | 0 | 0 | The study focuses on the antiviral activity of geneticin against dengue virus, with paromomycin mentioned only as a comparator with weak activity, and no pharmacokinetic parameters are reported. |
| PD | Zhang_2009 | not_relevant | 1 | 0 | The paper reports PD parameters (EC50, EC90) for geneticin, not paromomycin; paromomycin is only mentioned qualitatively as having weak activity. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_paromomycin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
